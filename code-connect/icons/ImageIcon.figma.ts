// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1725
// source=packages/icons/src/generated/ImageIcon.tsx
// component=ImageIcon
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
  example: figma.code`<ImageIcon size="${size}" />`,
  imports: ['import { ImageIcon } from "@ads/icons"'],
  id: "ads-icon-image",
  metadata: { nestable: true }
};
