// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-581
// source=packages/icons/src/generated/CheckIcon.tsx
// component=CheckIcon
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
  example: figma.code`<CheckIcon size="${size}" />`,
  imports: ['import { CheckIcon } from "@ads/icons"'],
  id: "ads-icon-check",
  metadata: { nestable: true }
};
