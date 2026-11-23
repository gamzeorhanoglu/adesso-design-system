// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-620
// source=packages/icons/src/generated/ChevronDownIcon.tsx
// component=ChevronDownIcon
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
  example: figma.code`<ChevronDownIcon size="${size}" />`,
  imports: ['import { ChevronDownIcon } from "@ads/icons"'],
  id: "ads-icon-chevron-down",
  metadata: { nestable: true }
};
