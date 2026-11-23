// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2635
// source=packages/icons/src/generated/ScissorsIcon.tsx
// component=ScissorsIcon
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
  example: figma.code`<ScissorsIcon size="${size}" />`,
  imports: ['import { ScissorsIcon } from "@ads/icons"'],
  id: "ads-icon-scissors",
  metadata: { nestable: true }
};
