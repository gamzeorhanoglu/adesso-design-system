// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=246-1122
// source=packages/ui-web/src/components/Tab/Tab.tsx
// component=Tab
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
  selected: "selected",
  disabled: "disabled",
}) ?? "default";
const size = instance.getEnum("size", {
  large: "large",
  medium: "medium",
  small: "small",
}) ?? "medium";
const labelLayer = instance.findText("Option Text");
const label = labelLayer.type === "TEXT" ? labelLayer.textContent : "Option Text";

export default {
  example: figma.code`<Tab
  variant="secondary"
  size="${size}"
  ${state === "selected" ? "selected" : ""}
  ${state === "disabled" ? "disabled" : ""}
  ${state === "hover" ? figma.code`data-preview-state="hover"` : ""}
>
  ${label}
</Tab>`,
  imports: ['import { Tab } from "@ads/ui-web"'],
  id: "ads-tab-secondary",
  metadata: { nestable: true, props: { runtimeState: state } },
};
