// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2751-917
// source=packages/ui-web/src/components/Step/Step.tsx
// component=Step
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  active: "active",
  completed: "completed",
  "completed-active": "completed-active",
  disabled: "disabled",
}) ?? "default";
const showTitle = instance.getBoolean("Show Title");
const numberLayer = instance.findText("Page Number");
const titleLayer = instance.findText("Lorem Ipsum");
const number = numberLayer.type === "TEXT" ? numberLayer.textContent : "1";
const title = titleLayer.type === "TEXT" ? titleLayer.textContent : "Lorem Ipsum";

export default {
  example: figma.code`<Step
  device="mobile"
  state="${state}"
  number="${number}"
  title="${title}"
  ${showTitle ? "" : figma.code`showTitle={false}`}
/>`,
  imports: ['import { Step } from "@ads/ui-web"'],
  id: "ads-step-mobile",
  metadata: { nestable: true },
};
