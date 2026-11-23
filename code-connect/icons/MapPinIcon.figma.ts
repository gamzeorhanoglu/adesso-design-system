// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1959
// source=packages/icons/src/generated/MapPinIcon.tsx
// component=MapPinIcon
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
  example: figma.code`<MapPinIcon size="${size}" />`,
  imports: ['import { MapPinIcon } from "@ads/icons"'],
  id: "ads-icon-map-pin",
  metadata: { nestable: true }
};
