// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1660
// source=packages/icons/src/generated/HeadphonesIcon.tsx
// component=HeadphonesIcon
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
  example: figma.code`<HeadphonesIcon size="${size}" />`,
  imports: ['import { HeadphonesIcon } from "@ads/icons"'],
  id: "ads-icon-headphones",
  metadata: { nestable: true }
};
