// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1946
// source=packages/icons/src/generated/MapIcon.tsx
// component=MapIcon
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
  example: figma.code`<MapIcon size="${size}" />`,
  imports: ['import { MapIcon } from "@ads/icons"'],
  id: "ads-icon-map",
  metadata: { nestable: true }
};
