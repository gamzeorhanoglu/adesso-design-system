// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3389
// source=packages/icons/src/generated/VideoIcon.tsx
// component=VideoIcon
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
  example: figma.code`<VideoIcon size="${size}" />`,
  imports: ['import { VideoIcon } from "@ads/icons"'],
  id: "ads-icon-video",
  metadata: { nestable: true }
};
