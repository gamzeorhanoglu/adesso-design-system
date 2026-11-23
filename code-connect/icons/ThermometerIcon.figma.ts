// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3038
// source=packages/icons/src/generated/ThermometerIcon.tsx
// component=ThermometerIcon
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
  example: figma.code`<ThermometerIcon size="${size}" />`,
  imports: ['import { ThermometerIcon } from "@ads/icons"'],
  id: "ads-icon-thermometer",
  metadata: { nestable: true }
};
