// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-113
// source=packages/icons/src/generated/AlignLeftIcon.tsx
// component=AlignLeftIcon
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
  example: figma.code`<AlignLeftIcon size="${size}" />`,
  imports: ['import { AlignLeftIcon } from "@ads/icons"'],
  id: "ads-icon-align-left",
  metadata: { nestable: true }
};
