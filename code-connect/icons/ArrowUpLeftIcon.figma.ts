// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-308
// source=packages/icons/src/generated/ArrowUpLeftIcon.tsx
// component=ArrowUpLeftIcon
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
  example: figma.code`<ArrowUpLeftIcon size="${size}" />`,
  imports: ['import { ArrowUpLeftIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-up-left",
  metadata: { nestable: true }
};
