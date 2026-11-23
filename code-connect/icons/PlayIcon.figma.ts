// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2414
// source=packages/icons/src/generated/PlayIcon.tsx
// component=PlayIcon
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
  example: figma.code`<PlayIcon size="${size}" />`,
  imports: ['import { PlayIcon } from "@ads/icons"'],
  id: "ads-icon-play",
  metadata: { nestable: true }
};
