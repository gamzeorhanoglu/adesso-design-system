// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-256
// source=packages/icons/src/generated/ArrowRightIcon.tsx
// component=ArrowRightIcon
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
  example: figma.code`<ArrowRightIcon size="${size}" />`,
  imports: ['import { ArrowRightIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-right",
  metadata: { nestable: true }
};
