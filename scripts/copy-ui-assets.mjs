import { cp, mkdir } from "node:fs/promises";

const source = new URL("../packages/ui-web/src/assets/flags/", import.meta.url);
const target = new URL("../packages/ui-web/dist/assets/flags/", import.meta.url);

await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

console.log("ADS UI assets copied: 10 flag variants.");
