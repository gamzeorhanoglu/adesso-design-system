// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-828
// source=packages/icons/src/generated/CloudRainIcon.tsx
// component=CloudRainIcon
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
  example: figma.code`<CloudRainIcon size="${size}" />`,
  imports: ['import { CloudRainIcon } from "@ads/icons"'],
  id: "ads-icon-cloud-rain",
  metadata: { nestable: true }
};
