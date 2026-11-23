// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2172-907
// source=packages/ui-web/src/components/DropdownList/DropdownList.tsx
// component=DropdownList
import figma from "figma";

const instance = figma.selectedInstance;
const showButtonGroup = instance.getBoolean("Show Button Group");
const searchable = instance.getBoolean("Show Search");
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  selected: "selected"
}) ?? "default";
const placeholders = instance.findLayers(
  (node) => node.type === "TEXT" && node.name === "Placeholder"
);
const textAt = (index: number, fallback: string) => {
  const layer = placeholders[index];
  return layer?.type === "TEXT" ? layer.textContent : fallback;
};
const searchPlaceholder = textAt(0, "Search");
const label1 = textAt(1, "Option 1");
const label2 = textAt(2, "Option 2");
const label3 = textAt(3, "Option 3");
const label4 = textAt(4, "Option 4");
const label5 = textAt(5, "Option 5");
const selectedValues = state === "selected"
  ? figma.code`defaultValue={["${label1}-1", "${label2}-2", "${label3}-3", "${label4}-4", "${label5}-5"]}`
  : "";

export default {
  example: figma.code`<DropdownList
  aria-label="Options"
  searchPlaceholder="${searchPlaceholder}"
  ${searchable ? "searchable" : "searchable={false}"}
  ${showButtonGroup ? "showButtonGroup" : "showButtonGroup={false}"}
  ${selectedValues}
  options={[
    { label: "${label1}", value: "${label1}-1" },
    { label: "${label2}", value: "${label2}-2" },
    { label: "${label3}", value: "${label3}-3" },
    { label: "${label4}", value: "${label4}-4" },
    { label: "${label5}", value: "${label5}-5" }
  ]}
/>`,
  imports: ['import { DropdownList } from "@ads/ui-web"'],
  id: "ads-dropdown-list",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "hover" ? "hover-is-runtime-managed" : state
    }
  }
};
