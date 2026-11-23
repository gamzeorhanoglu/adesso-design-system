// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=239-1050
// source=packages/ui-web/src/components/RadioButton/RadioButton.tsx
// component=RadioButton
import figma from "figma";

const instance = figma.selectedInstance;
const selected = instance.getBoolean("Selected");
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  selected: "selected",
  "selected-hover": "selected-hover",
  disabled: "disabled",
  error: "error"
});
const checked = selected || state === "selected" || state === "selected-hover";

export default {
  example: figma.code`
    <RadioButton
      aria-label="Radio option"
      name="radio-group"
      ${checked ? "defaultChecked" : ""}
      ${state === "disabled" ? "disabled" : ""}
      ${state === "error" ? "error" : ""}
    />
  `,
  imports: ['import { RadioButton } from "@ads/ui-web"'],
  id: "ads-radio-button",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "hover" || state === "selected-hover"
        ? "hover-is-runtime-managed"
        : state
    }
  }
};
