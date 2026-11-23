// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2681-2229
// source=packages/ui-web/src/components/Language/Language.tsx
// component=Language
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  open: "open"
}) ?? "default";
const placeholders = instance.findLayers(
  (node) => node.type === "TEXT" && node.name === "Placeholder"
);
const textAt = (index: number, fallback: string) => {
  const layer = placeholders[index];
  return layer?.type === "TEXT" ? layer.textContent : fallback;
};
const label1 = textAt(0, "Language 1");
const label2 = textAt(1, "Language 2");
const label3 = textAt(2, "Language 3");
const label4 = textAt(3, "Language 4");
const label5 = textAt(4, "Language 5");

export default {
  example: figma.code`<Language
  aria-label="Language"
  defaultValue="${label3}-3"
  ${state === "open" ? "defaultOpen" : ""}
  options={[
    { label: "${label1}", value: "${label1}-1", country: "turkey" },
    { label: "${label2}", value: "${label2}-2", country: "turkey" },
    { label: "${label3}", value: "${label3}-3", country: "turkey" },
    { label: "${label4}", value: "${label4}-4", country: "turkey" },
    { label: "${label5}", value: "${label5}-5", country: "turkey" }
  ]}
/>`,
  imports: ['import { Language } from "@ads/ui-web"'],
  id: "ads-language",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "hover" ? "hover-is-runtime-managed" : state
    }
  }
};
