// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3181
// source=packages/icons/src/generated/TruckIcon.tsx
// component=TruckIcon
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
  example: figma.code`<TruckIcon size="${size}" />`,
  imports: ['import { TruckIcon } from "@ads/icons"'],
  id: "ads-icon-truck",
  metadata: { nestable: true }
};
