// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3064
// source=packages/icons/src/generated/ThumbsUpIcon.tsx
// component=ThumbsUpIcon
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
  example: figma.code`<ThumbsUpIcon size="${size}" />`,
  imports: ['import { ThumbsUpIcon } from "@ads/icons"'],
  id: "ads-icon-thumbs-up",
  metadata: { nestable: true }
};
