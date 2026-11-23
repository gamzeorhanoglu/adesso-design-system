// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2172-1208
// source=packages/ui-web/src/components/Dropdown/Dropdown.tsx
// component=Dropdown
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
const showDropdownList = instance.getBoolean("Show DropdownList");
const placeholders = instance.findLayers(
  (node) => node.type === "TEXT" && node.name === "Placeholder"
);
const textAt = (index: number, fallback: string) => {
  const layer = placeholders[index];
  return layer?.type === "TEXT" ? layer.textContent : fallback;
};
const option1 = textAt(1, inputText);
const option2 = textAt(2, "Option 2");
const option3 = textAt(3, "Option 3");
const option4 = textAt(4, "Option 4");
const option5 = textAt(5, "Option 5");

export default {
  example: figma.code`<Dropdown
  label="${label}"
  placeholder="${inputText}"
  ${showLabel ? "" : "showLabel={false}"}
  ${showIcon ? "" : "showIcon={false}"}
  ${required ? "required" : ""}
  ${showInfo ? "showInfo" : ""}
  ${showSupportingText ? figma.code`supportingText="${supportingText}"` : ""}
  ${showDropdownList ? "" : "showDropdownList={false}"}
  ${state === "filled" ? figma.code`defaultValue={["${inputText}"]}` : ""}
  ${state === "disabled" ? "disabled" : ""}
  ${state === "error" ? 'errorMessage="Error Text"' : ""}
  ${state === "open" ? "defaultOpen" : ""}
  options={[
    { label: "${option1}", value: "${option1}" },
    { label: "${option2}", value: "${option2}" },
    { label: "${option3}", value: "${option3}" },
    { label: "${option4}", value: "${option4}" },
    { label: "${option5}", value: "${option5}" }
  ]}
/>`,
  imports: ['import { Dropdown } from "@ads/ui-web"'],
  id: "ads-dropdown",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "focus" ? "focus-is-runtime-managed" : state
    }
  }
};
