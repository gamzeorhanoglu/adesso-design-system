import { readFile, readdir, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = join(root, "packages/icons/src/figma");
const outputDirectory = join(root, "code-connect/icons");
const check = process.argv.includes("--check");
const json = process.argv.includes("--json");
const sizeMapping = ["xs", "sm", "md", "lg", "xl", "2xl"];

function toComponentName(name) {
  const base = name
    .replace(/^icon\//, "")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
  return `${/^\d/.test(base) ? "Icon" : ""}${base}Icon`;
}

function toId(name) {
  return `ads-${name
    .replace(/^icon\//, "icon-")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()}`;
}

function serialize(icon) {
  const componentName = toComponentName(icon.name);
  const enumLines = sizeMapping.map((size) => `  ${JSON.stringify(size)}: ${JSON.stringify(size)}`).join(",\n");
  return [
    `// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=${icon.setId.replace(":", "-")}`,
    `// source=packages/icons/src/generated/${componentName}.tsx`,
    `// component=${componentName}`,
    'import figma from "figma";',
    "",
    "const instance = figma.selectedInstance;",
    "const size = instance.getEnum(\"size\", {",
    enumLines,
    "});",
    "",
    "export default {",
    `  example: figma.code\`<${componentName} size="\${size}" />\`,`,
    `  imports: ['import { ${componentName} } from "@ads/icons"'],`,
    `  id: ${JSON.stringify(toId(icon.name))},`,
    "  metadata: { nestable: true }",
    "};",
    ""
  ].join("\n");
}

const batchFiles = (await readdir(sourceDirectory))
  .filter((file) => /^batch-\d+\.json$/.test(file))
  .sort();
const batches = await Promise.all(
  batchFiles.map(async (file) => JSON.parse(await readFile(join(sourceDirectory, file), "utf8")))
);
const icons = batches.flatMap((batch) => batch.icons).sort((a, b) => a.name.localeCompare(b.name));
if (icons.length !== 280) throw new Error(`Expected 280 ADS icons, received ${icons.length}.`);

const files = new Map(
  icons.map((icon) => [join(outputDirectory, `${toComponentName(icon.name)}.figma.ts`), serialize(icon)])
);

if (json) {
  const mappings = icons.map((icon) => {
    const componentName = toComponentName(icon.name);
    return {
      nodeId: icon.setId,
      componentName,
      label: "React",
      source: `packages/icons/src/generated/${componentName}.tsx`,
      template: files.get(join(outputDirectory, `${componentName}.figma.ts`)),
      templateDataJson: JSON.stringify({
        isParserless: true,
        nestable: true,
        imports: [`import { ${componentName} } from "@ads/icons"`]
      })
    };
  });
  console.log(JSON.stringify(mappings));
} else if (check) {
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
    console.error(`Generated Code Connect icon templates are stale:\n${stale.map((path) => `- ${path}`).join("\n")}`);
    process.exit(1);
  }
  console.log("ADS Code Connect icon templates valid: 280 mappings checked.");
} else {
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });
  for (const [path, content] of files) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
  }
  console.log("Generated 280 ADS icon Code Connect templates.");
}
