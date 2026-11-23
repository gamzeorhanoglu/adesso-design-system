// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3480
// source=packages/icons/src/generated/WifiOffIcon.tsx
// component=WifiOffIcon
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
  example: figma.code`<WifiOffIcon size="${size}" />`,
  imports: ['import { WifiOffIcon } from "@ads/icons"'],
  id: "ads-icon-wifi-off",
  metadata: { nestable: true }
};
