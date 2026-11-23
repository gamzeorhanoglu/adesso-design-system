// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3441
// source=packages/icons/src/generated/VolumeXIcon.tsx
// component=VolumeXIcon
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
  example: figma.code`<VolumeXIcon size="${size}" />`,
  imports: ['import { VolumeXIcon } from "@ads/icons"'],
  id: "ads-icon-volume-x",
  metadata: { nestable: true }
};
