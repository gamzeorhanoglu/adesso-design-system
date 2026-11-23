// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-594
// source=packages/icons/src/generated/CheckCircleIcon.tsx
// component=CheckCircleIcon
import figma from "figma";

const instance = figma.selectedInstance;
const size = instance.getEnum("size", {
  "xs": "xs",
  "sm": "sm",
  "md": "md",
  "lg": "lg",
  "xl": "xl",
  "2xl": "2xl"
});

export default {
  example: figma.code`<CheckCircleIcon size="${size}" />`,
  imports: ['import { CheckCircleIcon } from "@ads/icons"'],
  id: "ads-icon-check-circle",
  metadata: { nestable: true }
};
