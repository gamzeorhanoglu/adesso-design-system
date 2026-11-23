// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3402
// source=packages/icons/src/generated/VideoOffIcon.tsx
// component=VideoOffIcon
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
  example: figma.code`<VideoOffIcon size="${size}" />`,
  imports: ['import { VideoOffIcon } from "@ads/icons"'],
  id: "ads-icon-video-off",
  metadata: { nestable: true }
};
