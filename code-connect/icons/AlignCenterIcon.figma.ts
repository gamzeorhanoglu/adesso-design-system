// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-87
// source=packages/icons/src/generated/AlignCenterIcon.tsx
// component=AlignCenterIcon
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
  example: figma.code`<AlignCenterIcon size="${size}" />`,
  imports: ['import { AlignCenterIcon } from "@ads/icons"'],
  id: "ads-icon-align-center",
  metadata: { nestable: true }
};
