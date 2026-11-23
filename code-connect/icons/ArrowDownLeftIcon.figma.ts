// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-204
// source=packages/icons/src/generated/ArrowDownLeftIcon.tsx
// component=ArrowDownLeftIcon
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
  example: figma.code`<ArrowDownLeftIcon size="${size}" />`,
  imports: ['import { ArrowDownLeftIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-down-left",
  metadata: { nestable: true }
};
