// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2102
// source=packages/icons/src/generated/MinusSquareIcon.tsx
// component=MinusSquareIcon
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
  example: figma.code`<MinusSquareIcon size="${size}" />`,
  imports: ['import { MinusSquareIcon } from "@ads/icons"'],
  id: "ads-icon-minus-square",
  metadata: { nestable: true }
};
