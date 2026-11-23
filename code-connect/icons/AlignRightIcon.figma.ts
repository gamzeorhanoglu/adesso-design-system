// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-126
// source=packages/icons/src/generated/AlignRightIcon.tsx
// component=AlignRightIcon
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
  example: figma.code`<AlignRightIcon size="${size}" />`,
  imports: ['import { AlignRightIcon } from "@ads/icons"'],
  id: "ads-icon-align-right",
  metadata: { nestable: true }
};
