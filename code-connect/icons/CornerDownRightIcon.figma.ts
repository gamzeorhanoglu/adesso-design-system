// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-971
// source=packages/icons/src/generated/CornerDownRightIcon.tsx
// component=CornerDownRightIcon
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
  example: figma.code`<CornerDownRightIcon size="${size}" />`,
  imports: ['import { CornerDownRightIcon } from "@ads/icons"'],
  id: "ads-icon-corner-down-right",
  metadata: { nestable: true }
};
