// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-230
// source=packages/icons/src/generated/ArrowLeftIcon.tsx
// component=ArrowLeftIcon
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
  example: figma.code`<ArrowLeftIcon size="${size}" />`,
  imports: ['import { ArrowLeftIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-left",
  metadata: { nestable: true }
};
