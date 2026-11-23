// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1517
// source=packages/icons/src/generated/GiftIcon.tsx
// component=GiftIcon
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
  example: figma.code`<GiftIcon size="${size}" />`,
  imports: ['import { GiftIcon } from "@ads/icons"'],
  id: "ads-icon-gift",
  metadata: { nestable: true }
};
