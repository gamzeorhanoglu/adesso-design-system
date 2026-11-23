// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2765
// source=packages/icons/src/generated/ShuffleIcon.tsx
// component=ShuffleIcon
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
  example: figma.code`<ShuffleIcon size="${size}" />`,
  imports: ['import { ShuffleIcon } from "@ads/icons"'],
  id: "ads-icon-shuffle",
  metadata: { nestable: true }
};
