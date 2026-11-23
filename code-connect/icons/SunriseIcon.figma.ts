// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2947
// source=packages/icons/src/generated/SunriseIcon.tsx
// component=SunriseIcon
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
  example: figma.code`<SunriseIcon size="${size}" />`,
  imports: ['import { SunriseIcon } from "@ads/icons"'],
  id: "ads-icon-sunrise",
  metadata: { nestable: true }
};
