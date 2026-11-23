// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2172-851
// source=packages/ui-web/src/components/ListItem/ListItem.tsx
// component=ListItem
import figma from "figma";

const instance = figma.selectedInstance;
const showCheckbox = instance.getBoolean("Show Checkbox");
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  selected: "selected",
  disabled: "disabled"
});
const textLayer = instance.findText("Placeholder");
const label = textLayer.type === "TEXT" ? textLayer.textContent : "Option";

export default {
  example: figma.code`<ListItem label="${label}" ${showCheckbox ? "showCheckbox" : "showCheckbox={false}"} ${state === "selected" ? "selected" : ""} ${state === "disabled" ? "disabled" : ""} />`,
  imports: ['import { ListItem } from "@ads/ui-web"'],
  id: "ads-list-item",
  metadata: { nestable: true }
};
