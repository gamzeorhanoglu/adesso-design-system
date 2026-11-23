// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1803
// source=packages/icons/src/generated/LayersIcon.tsx
// component=LayersIcon
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
  example: figma.code`<LayersIcon size="${size}" />`,
  imports: ['import { LayersIcon } from "@ads/icons"'],
  id: "ads-icon-layers",
  metadata: { nestable: true }
};
