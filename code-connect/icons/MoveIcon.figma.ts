// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2180
// source=packages/icons/src/generated/MoveIcon.tsx
// component=MoveIcon
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
  example: figma.code`<MoveIcon size="${size}" />`,
  imports: ['import { MoveIcon } from "@ads/icons"'],
  id: "ads-icon-move",
  metadata: { nestable: true }
};
