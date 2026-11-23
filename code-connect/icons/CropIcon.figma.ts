// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1088
// source=packages/icons/src/generated/CropIcon.tsx
// component=CropIcon
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
  example: figma.code`<CropIcon size="${size}" />`,
  imports: ['import { CropIcon } from "@ads/icons"'],
  id: "ads-icon-crop",
  metadata: { nestable: true }
};
