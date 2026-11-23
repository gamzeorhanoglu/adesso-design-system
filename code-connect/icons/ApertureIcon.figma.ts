// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-152
// source=packages/icons/src/generated/ApertureIcon.tsx
// component=ApertureIcon
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
  example: figma.code`<ApertureIcon size="${size}" />`,
  imports: ['import { ApertureIcon } from "@ads/icons"'],
  id: "ads-icon-aperture",
  metadata: { nestable: true }
};
