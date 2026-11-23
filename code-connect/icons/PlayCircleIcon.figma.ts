// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2427
// source=packages/icons/src/generated/PlayCircleIcon.tsx
// component=PlayCircleIcon
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
  example: figma.code`<PlayCircleIcon size="${size}" />`,
  imports: ['import { PlayCircleIcon } from "@ads/icons"'],
  id: "ads-icon-play-circle",
  metadata: { nestable: true }
};
