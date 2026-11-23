// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=229-2793
// source=packages/ui-web/src/components/SearchInput/SearchInput.tsx
// component=SearchInput
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  focus: "focus",
  filled: "filled",
  disabled: "disabled",
  error: "error"
}) ?? "default";
const clearable = instance.getBoolean("Input Icon");
const placeholderLayer = instance.findText("Placeholder");
const placeholder = placeholderLayer.type === "TEXT" ? placeholderLayer.textContent : "Search";
const valueProp = ["filled", "error"].includes(state)
  ? figma.code`defaultValue="${placeholder}"`
  : figma.code`placeholder="${placeholder}"`;

export default {
  example: figma.code`<SearchInput
  aria-label="${placeholder}"
  ${valueProp}
  ${clearable ? "clearable" : "clearable={false}"}
  ${state === "disabled" ? "disabled" : ""}
  ${state === "error" ? "error" : ""}
/>`,
  imports: ['import { SearchInput } from "@ads/ui-web"'],
  id: "ads-search-input",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "focus" ? "focus-is-runtime-managed" : state
    }
  }
};
