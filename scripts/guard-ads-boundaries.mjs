import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const appsRoot = join(root, "apps");
const componentsRoot = join(root, "packages/ui-web/src/components");
const uiIndexPath = join(root, "packages/ui-web/src/index.ts");
const configPath = join(root, "ads.config.json");

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ["dist", "node_modules"].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(path)));
    else files.push(path);
  }
  return files;
}

const errors = [];
const appFiles = await filesUnder(appsRoot);
const sourceExtensions = new Set([".tsx", ".jsx", ".html"]);
const styleExtensions = new Set([".css", ".scss", ".sass"]);

for (const path of appFiles) {
  const extension = extname(path);
  const source = await readFile(path, "utf8");
  const displayPath = relative(root, path);

  if (sourceExtensions.has(extension)) {
    const nativeControls = source.match(/<(button|input|select|textarea)\b/g) ?? [];
    if (nativeControls.length) {
      errors.push(
        `${displayPath}: native controls are forbidden in consuming apps (${[
          ...new Set(nativeControls.map((value) => value.toLowerCase()))
        ].join(", ")}); use @ads/ui-web.`
      );
    }

    if (/className\s*=\s*["'`][^"'`]*\bads-(btn|field)\b/.test(source)) {
      errors.push(
        `${displayPath}: do not recreate ADS components with class names; import them from @ads/ui-web.`
      );
    }

    if (/<svg\b/i.test(source)) {
      errors.push(
        `${displayPath}: inline SVG icons are forbidden in consuming apps; use @ads/icons.`
      );
    }
  }

  if (styleExtensions.has(extension)) {
    if (/(#[0-9a-f]{3,8}\b|\brgba?\s*\(|\bhsla?\s*\()/i.test(source)) {
      errors.push(
        `${displayPath}: hardcoded colors are forbidden in consuming apps; use @ads/tokens CSS variables.`
      );
    }
    if (/\.(ads-btn|ads-field)(?:\b|[.:\[])/.test(source)) {
      errors.push(
        `${displayPath}: ADS component styling belongs in @ads/css, not application styles.`
      );
    }
  }
}

const componentFiles = (await filesUnder(componentsRoot)).filter(
  (path) => path.endsWith(".tsx") && !path.endsWith(".test.tsx")
);
const uiIndex = await readFile(uiIndexPath, "utf8");
const config = JSON.parse(await readFile(configPath, "utf8"));

for (const path of componentFiles) {
  const source = await readFile(path, "utf8");
  const displayPath = relative(root, path);
  const componentName = path.split("/").at(-2);

  if (/\buse(State|Reducer|Effect|LayoutEffect)\s*\(/.test(source)) {
    errors.push(
      `${displayPath}: reusable behavior must live in a focused hook under packages/ui-web/src/hooks.`
    );
  }

  if (!uiIndex.includes(`./components/${componentName}/${componentName}`)) {
    errors.push(`${displayPath}: ${componentName} is not exported from packages/ui-web/src/index.ts.`);
  }

  const configKey = componentName[0].toLowerCase() + componentName.slice(1);
  const mapping = config.figma?.components?.[configKey];
  if (!mapping?.componentSetNodeId && !mapping?.componentNodeId) {
    errors.push(
      `${displayPath}: ${componentName} has no Figma component mapping in ads.config.json.`
    );
  }
}

if (errors.length) {
  console.error("ADS boundary guard failed:\n");
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("ADS boundary guard passed: consumers use ADS and component behavior stays in hooks.");

