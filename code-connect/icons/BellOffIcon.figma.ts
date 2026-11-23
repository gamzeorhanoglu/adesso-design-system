// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-425
// source=packages/icons/src/generated/BellOffIcon.tsx
// component=BellOffIcon
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
  example: figma.code`<BellOffIcon size="${size}" />`,
  imports: ['import { BellOffIcon } from "@ads/icons"'],
  id: "ads-icon-bell-off",
  metadata: { nestable: true }
};
