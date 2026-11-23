// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=239-1178
// source=packages/ui-web/src/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from "figma";

const instance = figma.selectedInstance;
const selected = instance.getBoolean("Selected");
const state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
  selected: "selected",
  "selected-hover": "selected-hover",
  indeterminate: "indeterminate",
  "indeterminate-hover": "indeterminate-hover",
  disabled: "disabled",
  error: "error"
});
const checked = selected || state === "selected" || state === "selected-hover";
const indeterminate = state === "indeterminate" || state === "indeterminate-hover";

export default {
  example: figma.code`
    <Checkbox
      aria-label="Checkbox"
      ${checked ? "defaultChecked" : ""}
      ${indeterminate ? "indeterminate" : ""}
      ${state === "disabled" ? "disabled" : ""}
      ${state === "error" ? "error" : ""}
    />
  `,
  imports: ['import { Checkbox } from "@ads/ui-web"'],
  id: "ads-checkbox",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "hover" || state?.endsWith("-hover")
        ? "hover-is-runtime-managed"
        : state
    }
  }
};
