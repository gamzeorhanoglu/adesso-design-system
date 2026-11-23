import { readFile, readdir, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = join(root, "packages/icons/src/figma");
const generatedDirectory = join(root, "packages/icons/src/generated");
const generatedIndexPath = join(generatedDirectory, "index.ts");
const packageIndexPath = join(root, "packages/icons/src/index.ts");
const check = process.argv.includes("--check");
const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"];
const dimensions = { xs: 16, sm: 20, md: 24, lg: 32, xl: 40, "2xl": 48 };

function toComponentName(name) {
  const base = name
    .replace(/^icon\//, "")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
  return `${/^\d/.test(base) ? "Icon" : ""}${base}Icon`;
}

function serializeIcon(icon, componentName) {
  const svgBySize = Object.fromEntries(
    sizes.map((size) => [size, icon.variants.find((variant) => variant.size === size).svg])
  );
  return [
    'import { createAdsIcon } from "../createAdsIcon";',
    "",
    `const svgBySize = ${JSON.stringify(svgBySize, null, 2)} as const;`,
    "",
    `export const ${componentName} = createAdsIcon("${componentName}", svgBySize);`,
    ""
  ].join("\n");
}

async function readSource() {
  const files = (await readdir(sourceDirectory))
    .filter((file) => /^batch-\d+\.json$/.test(file))
    .sort();
  const batches = await Promise.all(
    files.map(async (file) => JSON.parse(await readFile(join(sourceDirectory, file), "utf8")))
  );
  return batches.flatMap((batch) => batch.icons);
}

function validate(icons) {
  const errors = [];
  if (icons.length !== 280) errors.push(`Expected 280 icons, received ${icons.length}.`);
  const names = new Set();
  const components = new Set();
  let variantCount = 0;

  for (const icon of icons) {
    if (!icon.name.startsWith("icon/")) errors.push(`${icon.name}: invalid ADS icon name.`);
    if (names.has(icon.name)) errors.push(`${icon.name}: duplicate icon name.`);
    names.add(icon.name);
    const componentName = toComponentName(icon.name);
    if (components.has(componentName)) errors.push(`${componentName}: component-name collision.`);
    components.add(componentName);

    if (icon.variants.length !== sizes.length) {
      errors.push(`${icon.name}: expected six size variants.`);
      continue;
    }
    variantCount += icon.variants.length;
    for (const size of sizes) {
      const variant = icon.variants.find((entry) => entry.size === size);
      if (!variant) {
        errors.push(`${icon.name}: missing ${size}.`);
        continue;
      }
      const expected = dimensions[size];
      if (variant.width !== expected || variant.height !== expected) {
        errors.push(`${icon.name}/${size}: expected ${expected}x${expected}.`);
      }
      const rootPattern = new RegExp(
        `^<svg width="${expected}" height="${expected}" viewBox="0 0 ${expected} ${expected}"`
      );
      if (!rootPattern.test(variant.svg)) {
        errors.push(`${icon.name}/${size}: SVG root does not match the Figma variant.`);
      }
    }
  }

  if (variantCount !== 1680) errors.push(`Expected 1680 variants, received ${variantCount}.`);
  if (errors.length) throw new Error(errors.join("\n"));
}

async function expectedFiles(icons) {
  const sorted = [...icons].sort((a, b) => a.name.localeCompare(b.name));
  const files = new Map();
  const exports = [];

  for (const icon of sorted) {
    const componentName = toComponentName(icon.name);
    files.set(join(generatedDirectory, `${componentName}.tsx`), serializeIcon(icon, componentName));
    exports.push(`export { ${componentName} } from "./${componentName}";`);
  }
  files.set(generatedIndexPath, `${exports.join("\n")}\n`);
  files.set(
    packageIndexPath,
    [
      'export { iconSizes } from "./createAdsIcon";',
      'export type { AdsIconComponent, AdsIconProps, IconSize } from "./createAdsIcon";',
      'export * from "./generated/index";',
      ""
    ].join("\n")
  );
  return files;
}

const icons = await readSource();
validate(icons);
const files = await expectedFiles(icons);

if (check) {
  const stale = [];
  for (const [path, expected] of files) {
    let actual;
    try {
      actual = await readFile(path, "utf8");
    } catch {
      actual = undefined;
    }
    if (actual !== expected) stale.push(path.replace(`${root}/`, ""));
  }
  if (stale.length) {
    console.error(`Generated ADS icons are stale:\n${stale.map((path) => `- ${path}`).join("\n")}`);
    process.exit(1);
  }
  console.log("ADS icon source valid: 280 icons and 1680 exact Figma SVG variants.");
} else {
  await rm(generatedDirectory, { recursive: true, force: true });
  await mkdir(generatedDirectory, { recursive: true });
  for (const [path, content] of files) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
  }
  console.log("Generated 280 ADS React icons from 1680 exact Figma SVG variants.");
}
