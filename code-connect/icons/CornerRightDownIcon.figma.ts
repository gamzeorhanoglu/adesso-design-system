// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1010
// source=packages/icons/src/generated/CornerRightDownIcon.tsx
// component=CornerRightDownIcon
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
  example: figma.code`<CornerRightDownIcon size="${size}" />`,
  imports: ['import { CornerRightDownIcon } from "@ads/icons"'],
  id: "ads-icon-corner-right-down",
  metadata: { nestable: true }
};
