// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5420-2631
// source=packages/ui-web/src/components/DatePicker/DatePicker.tsx
// component=DatePicker
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  disabled: "disabled",
  filled: "filled",
  focus: "focus",
  error: "error",
  open: "open"
}) ?? "default";
const inputText = instance.getString("Input Text");
const label = instance.getString("Label Text");
const supportingText = instance.getString("Supporting Text");
const showIcon = instance.getBoolean("Input Icon");
const showLabel = instance.getBoolean("Show Label");
const required = instance.getBoolean("Required");
const showInfo = instance.getBoolean("Show Info");
const showSupportingText = instance.getBoolean("Show Supporting Text");

export default {
  example: figma.code`<DatePicker
  label="${label}"
  placeholder="${inputText}"
  ${showLabel ? "" : "showLabel={false}"}
  ${showIcon ? "" : "showIcon={false}"}
  ${required ? "required" : ""}
  ${showInfo ? "showInfo" : ""}
  ${showSupportingText ? figma.code`supportingText="${supportingText}"` : ""}
  ${state === "filled" || state === "focus" || state === "error" ? figma.code`defaultInputValue="${inputText}"` : ""}
  ${state === "disabled" ? "disabled" : ""}
  ${state === "error" ? 'errorMessage="Error Text"' : ""}
  ${state === "open" ? "defaultOpen" : ""}
/>`,
  imports: ['import { DatePicker } from "@ads/ui-web"'],
  id: "ads-date-picker",
  metadata: {
    nestable: true,
    props: {
      calendar: "ads-calendar",
      runtimeState: state === "focus" ? "focus-is-runtime-managed" : state
    }
  }
};
