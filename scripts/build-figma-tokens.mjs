import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = resolve(root, "packages/tokens/src/figma.tokens.json");
const cssPath = resolve(root, "packages/tokens/src/generated/figma.css");
const jsonPath = resolve(root, "packages/tokens/src/generated/figma.resolved.json");
const checkOnly = process.argv.includes("--check");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const allVariables = [...manifest.variables, ...(manifest.dependencies ?? [])];
const variablesById = new Map(allVariables.map((variable) => [variable.id, variable]));
const collectionsById = new Map(
  manifest.collections.map((collection) => [collection.id, collection])
);

function slug(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function cssName(variable) {
  const syntax = variable.codeSyntax?.WEB?.trim();
  const match = syntax?.match(/^var\((--[a-zA-Z0-9-_]+)\)$/);
  if (match) return match[1];
  const collection = collectionsById.get(variable.variableCollectionId);
  return `--ads-${slug(collection.name)}-${slug(variable.name)}`;
}

const cssNames = new Map();
for (const variable of allVariables) {
  const name = cssName(variable);
  if (cssNames.has(name) && cssNames.get(name) !== variable.id) {
    throw new Error(`Duplicate generated CSS token ${name}: ${cssNames.get(name)} and ${variable.id}`);
  }
  cssNames.set(name, variable.id);
}

function modeFor(collection, requestedModeName) {
  return (
    collection.modes.find((mode) => mode.name === requestedModeName) ??
    collection.modes.find((mode) => mode.id === collection.defaultModeId) ??
    collection.modes[0]
  );
}

function resolveValue(variable, modeName, seen = new Set()) {
  const key = `${variable.id}:${modeName}`;
  if (seen.has(key)) throw new Error(`Circular Figma variable alias at ${variable.name}`);
  seen.add(key);

  const collection = collectionsById.get(variable.variableCollectionId);
  const mode = modeFor(collection, modeName);
  const raw = variable.valuesByMode[mode.id];
  if (raw?.type !== "VARIABLE_ALIAS") return raw;

  const target = variablesById.get(raw.id);
  if (!target) throw new Error(`Missing alias target ${raw.id} used by ${variable.name}`);
  return resolveValue(target, modeName, seen);
}

function channel(value) {
  return Math.round(Math.min(1, Math.max(0, value)) * 255)
    .toString(16)
    .padStart(2, "0");
}

function colorToHex(value) {
  const alpha = value.a ?? 1;
  return `#${channel(value.r)}${channel(value.g)}${channel(value.b)}${
    alpha < 1 ? channel(alpha) : ""
  }`;
}

function floatToCss(variable, value) {
  const unitlessScopes = new Set(["OPACITY", "FONT_WEIGHT"]);
  const isUnitless = variable.scopes?.some((scope) => unitlessScopes.has(scope));
  return isUnitless || value === 0 ? String(value) : `${value}px`;
}

function directCssValue(variable, modeName) {
  const collection = collectionsById.get(variable.variableCollectionId);
  const mode = modeFor(collection, modeName);
  const raw = variable.valuesByMode[mode.id];
  if (raw?.type === "VARIABLE_ALIAS") {
    const target = variablesById.get(raw.id);
    if (!target) throw new Error(`Missing alias target ${raw.id} used by ${variable.name}`);
    return `var(${cssName(target)})`;
  }

  if (variable.resolvedType === "COLOR") return colorToHex(raw);
  if (variable.resolvedType === "FLOAT") return floatToCss(variable, raw);
  if (variable.resolvedType === "STRING") return JSON.stringify(raw);
  return String(raw);
}

function declarations(modeName, variables) {
  return variables
    .map((variable) => `  ${cssName(variable)}: ${directCssValue(variable, modeName)};`)
    .sort()
    .join("\n");
}

const defaultVariables = allVariables.filter((variable) => {
  const collection = collectionsById.get(variable.variableCollectionId);
  return collection.modes.length >= 1;
});
const darkVariables = allVariables.filter((variable) => {
  const collection = collectionsById.get(variable.variableCollectionId);
  return collection.modes.some((mode) => mode.name === "Dark");
});

const css = `/* Generated from ADS Figma variables. Do not edit manually. */
:root,
[data-ads-theme="light"] {
${declarations("Light", defaultVariables)}
}

[data-ads-theme="dark"] {
${declarations("Dark", darkVariables)}
}
`;

const resolved = {
  schemaVersion: 1,
  source: manifest.source,
  collections: manifest.collections,
  tokens: allVariables.map((variable) => {
    const collection = collectionsById.get(variable.variableCollectionId);
    return {
      id: variable.id,
      name: variable.name,
      collection: collection.name,
      type: variable.resolvedType,
      scopes: variable.scopes,
      cssName: cssName(variable),
      values: Object.fromEntries(
        collection.modes.map((mode) => [mode.name, resolveValue(variable, mode.name)])
      )
    };
  })
};
const json = `${JSON.stringify(resolved, null, 2)}\n`;

async function assertCurrent(path, expected) {
  let actual = "";
  try {
    actual = await readFile(path, "utf8");
  } catch {
    throw new Error(`${path} is missing. Run npm run tokens:build.`);
  }
  if (actual !== expected) {
    throw new Error(`${path} is stale. Run npm run tokens:build.`);
  }
}

if (checkOnly) {
  await Promise.all([assertCurrent(cssPath, css), assertCurrent(jsonPath, json)]);
  console.log(`ADS Figma tokens are current: ${resolved.tokens.length} variables checked.`);
} else {
  await mkdir(dirname(cssPath), { recursive: true });
  await Promise.all([writeFile(cssPath, css), writeFile(jsonPath, json)]);
  console.log(`Generated ${resolved.tokens.length} ADS tokens with Light/Dark mode support.`);
}
