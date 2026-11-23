// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-997
// source=packages/icons/src/generated/CornerLeftUpIcon.tsx
// component=CornerLeftUpIcon
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
  example: figma.code`<CornerLeftUpIcon size="${size}" />`,
  imports: ['import { CornerLeftUpIcon } from "@ads/icons"'],
  id: "ads-icon-corner-left-up",
  metadata: { nestable: true }
};
