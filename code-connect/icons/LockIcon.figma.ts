// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1894
// source=packages/icons/src/generated/LockIcon.tsx
// component=LockIcon
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
  example: figma.code`<LockIcon size="${size}" />`,
  imports: ['import { LockIcon } from "@ads/icons"'],
  id: "ads-icon-lock",
  metadata: { nestable: true }
};
