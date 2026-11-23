// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1101
// source=packages/icons/src/generated/CrosshairIcon.tsx
// component=CrosshairIcon
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
  example: figma.code`<CrosshairIcon size="${size}" />`,
  imports: ['import { CrosshairIcon } from "@ads/icons"'],
  id: "ads-icon-crosshair",
  metadata: { nestable: true }
};
