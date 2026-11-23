// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-243
// source=packages/icons/src/generated/ArrowLeftCircleIcon.tsx
// component=ArrowLeftCircleIcon
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
  example: figma.code`<ArrowLeftCircleIcon size="${size}" />`,
  imports: ['import { ArrowLeftCircleIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-left-circle",
  metadata: { nestable: true }
};
