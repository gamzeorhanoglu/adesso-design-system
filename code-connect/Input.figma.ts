// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=228-2526
// source=packages/ui-web/src/components/Input/Input.tsx
// component=Input
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  focus: "focus",
  filled: "filled",
  disabled: "disabled",
  error: "error"
});
const typeVariant = instance.getEnum("Type", {
  text: "text",
  masked: "masked"
});
const label = instance.getString("Label Text");
const inputText = instance.getString("Input Text");
const supportingText = instance.getString("Supporting Text");
const errorText = instance.getString("Error Text");
const showLabel = instance.getBoolean("Show Label");
const showSupportingText = instance.getBoolean("Show Supporting Text");
const showInfo = instance.getBoolean("Show Info");
const required = instance.getBoolean("Required");
const showUnits = instance.getBoolean("Show Units");
const showCountrySelection = instance.getBoolean("Show Country Selection");

const valueProp =
  state === "filled"
    ? figma.code`defaultValue="${inputText}"`
    : figma.code`placeholder="${inputText}"`;
const supportingProp = showSupportingText
  ? figma.code`supportingText="${supportingText}"`
  : "";
const errorProp =
  state === "error" ? figma.code`errorMessage="${errorText}"` : "";

export default {
  example: figma.code`
    <Input
      label="${label}"
      typeVariant="${typeVariant}"
      ${valueProp}
      ${supportingProp}
      ${errorProp}
      ${required ? "required" : ""}
      ${showInfo ? "showInfo" : ""}
      ${state === "disabled" ? "disabled" : ""}
    />
  `,
  imports: ['import { Input } from "@ads/ui-web"'],
  id: "ads-input",
  metadata: {
    nestable: true,
    props: {
      figmaLabelVisibility: showLabel ? "visible" : "kept-visible-in-code-for-accessibility",
      figmaUnits: showUnits ? "content-required" : "hidden",
      figmaCountrySelection: showCountrySelection ? "options-required" : "hidden",
      runtimeState: state === "focus" ? "focus-is-runtime-managed" : state
    }
  }
};
