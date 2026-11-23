// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2596
// source=packages/icons/src/generated/RotateCwIcon.tsx
// component=RotateCwIcon
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
  example: figma.code`<RotateCwIcon size="${size}" />`,
  imports: ['import { RotateCwIcon } from "@ads/icons"'],
  id: "ads-icon-rotate-cw",
  metadata: { nestable: true }
};
