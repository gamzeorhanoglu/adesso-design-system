// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2747-1570
// source=packages/ui-web/src/components/StepperConnector/StepperConnector.tsx
// component=StepperConnector
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  completed: "completed",
  disabled: "disabled",
}) ?? "default";

export default {
  example: figma.code`<StepperConnector state="${state}" />`,
  imports: ['import { StepperConnector } from "@ads/ui-web"'],
  id: "ads-stepper-connector",
  metadata: { nestable: true },
};
