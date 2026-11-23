// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-412
// source=packages/icons/src/generated/BellIcon.tsx
// component=BellIcon
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
  example: figma.code`<BellIcon size="${size}" />`,
  imports: ['import { BellIcon } from "@ads/icons"'],
  id: "ads-icon-bell",
  metadata: { nestable: true }
};
