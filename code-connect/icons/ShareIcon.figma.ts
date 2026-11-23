// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2700
// source=packages/icons/src/generated/ShareIcon.tsx
// component=ShareIcon
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
  example: figma.code`<ShareIcon size="${size}" />`,
  imports: ['import { ShareIcon } from "@ads/icons"'],
  id: "ads-icon-share",
  metadata: { nestable: true }
};
