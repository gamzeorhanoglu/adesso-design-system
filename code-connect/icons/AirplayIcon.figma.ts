// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-35
// source=packages/icons/src/generated/AirplayIcon.tsx
// component=AirplayIcon
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
  example: figma.code`<AirplayIcon size="${size}" />`,
  imports: ['import { AirplayIcon } from "@ads/icons"'],
  id: "ads-icon-airplay",
  metadata: { nestable: true }
};
