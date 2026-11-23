// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1829
// source=packages/icons/src/generated/LifeBuoyIcon.tsx
// component=LifeBuoyIcon
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
  example: figma.code`<LifeBuoyIcon size="${size}" />`,
  imports: ['import { LifeBuoyIcon } from "@ads/icons"'],
  id: "ads-icon-life-buoy",
  metadata: { nestable: true }
};
