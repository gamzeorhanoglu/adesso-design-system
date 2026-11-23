// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-633
// source=packages/icons/src/generated/ChevronLeftIcon.tsx
// component=ChevronLeftIcon
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
  example: figma.code`<ChevronLeftIcon size="${size}" />`,
  imports: ['import { ChevronLeftIcon } from "@ads/icons"'],
  id: "ads-icon-chevron-left",
  metadata: { nestable: true }
};
