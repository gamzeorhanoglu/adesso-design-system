// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-659
// source=packages/icons/src/generated/ChevronUpIcon.tsx
// component=ChevronUpIcon
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
  example: figma.code`<ChevronUpIcon size="${size}" />`,
  imports: ['import { ChevronUpIcon } from "@ads/icons"'],
  id: "ads-icon-chevron-up",
  metadata: { nestable: true }
};
