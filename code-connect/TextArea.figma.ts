// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=239-581
// source=packages/ui-web/src/components/TextArea/TextArea.tsx
// component=TextArea
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("state", {
  default: "default",
  focus: "focus",
  filled: "filled",
  disabled: "disabled",
  error: "error"
}) ?? "default";
const inputText = instance.getString("Input Text");
const errorText = instance.getString("Error Text");
const label = instance.getString(" Label Text");
const supportingText = instance.getString("Supporting Text");
const showLabel = instance.getBoolean("Show Label");
const required = instance.getBoolean("Required");
const showResizeHandle = instance.getBoolean("Show Resize Handle");
const showSupportingText = instance.getBoolean("Show Supporting Text");
const showInfo = instance.getBoolean("Show Info");

export default {
  example: figma.code`<TextArea
  label="${label}"
  placeholder="${inputText}"
  ${showLabel ? "" : "showLabel={false}"}
  ${required ? "required" : ""}
  ${showInfo ? "showInfo" : ""}
  ${showResizeHandle ? "" : "showResizeHandle={false}"}
  ${showSupportingText ? figma.code`supportingText="${supportingText}"` : "showSupportingText={false}"}
  ${state === "focus" || state === "filled" || state === "disabled" || state === "error" ? figma.code`defaultValue="${inputText}"` : ""}
  ${state === "disabled" ? "disabled" : ""}
  ${state === "error" ? figma.code`errorMessage="${errorText}"` : ""}
/>`,
  imports: ['import { TextArea } from "@ads/ui-web"'],
  id: "ads-textarea",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "focus" ? "focus-is-runtime-managed" : state
    }
  }
};
