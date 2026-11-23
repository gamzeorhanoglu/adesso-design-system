// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1049
// source=packages/icons/src/generated/CornerUpRightIcon.tsx
// component=CornerUpRightIcon
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
  example: figma.code`<CornerUpRightIcon size="${size}" />`,
  imports: ['import { CornerUpRightIcon } from "@ads/icons"'],
  id: "ads-icon-corner-up-right",
  metadata: { nestable: true }
};
