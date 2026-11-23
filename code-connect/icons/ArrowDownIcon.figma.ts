// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-178
// source=packages/icons/src/generated/ArrowDownIcon.tsx
// component=ArrowDownIcon
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
  example: figma.code`<ArrowDownIcon size="${size}" />`,
  imports: ['import { ArrowDownIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-down",
  metadata: { nestable: true }
};
