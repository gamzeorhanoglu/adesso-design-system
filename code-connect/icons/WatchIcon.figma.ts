// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3454
// source=packages/icons/src/generated/WatchIcon.tsx
// component=WatchIcon
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
  example: figma.code`<WatchIcon size="${size}" />`,
  imports: ['import { WatchIcon } from "@ads/icons"'],
  id: "ads-icon-watch",
  metadata: { nestable: true }
};
