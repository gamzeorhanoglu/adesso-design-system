// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1673
// source=packages/icons/src/generated/HeartIcon.tsx
// component=HeartIcon
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
  example: figma.code`<HeartIcon size="${size}" />`,
  imports: ['import { HeartIcon } from "@ads/icons"'],
  id: "ads-icon-heart",
  metadata: { nestable: true }
};
