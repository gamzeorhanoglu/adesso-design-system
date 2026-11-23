// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-282
// source=packages/icons/src/generated/ArrowUpIcon.tsx
// component=ArrowUpIcon
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
  example: figma.code`<ArrowUpIcon size="${size}" />`,
  imports: ['import { ArrowUpIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-up",
  metadata: { nestable: true }
};
