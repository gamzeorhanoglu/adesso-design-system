// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-321
// source=packages/icons/src/generated/ArrowUpRightIcon.tsx
// component=ArrowUpRightIcon
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
  example: figma.code`<ArrowUpRightIcon size="${size}" />`,
  imports: ['import { ArrowUpRightIcon } from "@ads/icons"'],
  id: "ads-icon-arrow-up-right",
  metadata: { nestable: true }
};
