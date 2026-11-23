// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1179
// source=packages/icons/src/generated/DivideSquareIcon.tsx
// component=DivideSquareIcon
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
  example: figma.code`<DivideSquareIcon size="${size}" />`,
  imports: ['import { DivideSquareIcon } from "@ads/icons"'],
  id: "ads-icon-divide-square",
  metadata: { nestable: true }
};
