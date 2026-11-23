// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2193
// source=packages/icons/src/generated/MusicIcon.tsx
// component=MusicIcon
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
  example: figma.code`<MusicIcon size="${size}" />`,
  imports: ['import { MusicIcon } from "@ads/icons"'],
  id: "ads-icon-music",
  metadata: { nestable: true }
};
