// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1322
// source=packages/icons/src/generated/FastForwardIcon.tsx
// component=FastForwardIcon
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
  example: figma.code`<FastForwardIcon size="${size}" />`,
  imports: ['import { FastForwardIcon } from "@ads/icons"'],
  id: "ads-icon-fast-forward",
  metadata: { nestable: true }
};
