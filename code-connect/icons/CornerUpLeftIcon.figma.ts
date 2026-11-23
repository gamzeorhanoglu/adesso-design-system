// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1036
// source=packages/icons/src/generated/CornerUpLeftIcon.tsx
// component=CornerUpLeftIcon
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
  example: figma.code`<CornerUpLeftIcon size="${size}" />`,
  imports: ['import { CornerUpLeftIcon } from "@ads/icons"'],
  id: "ads-icon-corner-up-left",
  metadata: { nestable: true }
};
