// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-451
// source=packages/icons/src/generated/BoldIcon.tsx
// component=BoldIcon
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
  example: figma.code`<BoldIcon size="${size}" />`,
  imports: ['import { BoldIcon } from "@ads/icons"'],
  id: "ads-icon-bold",
  metadata: { nestable: true }
};
