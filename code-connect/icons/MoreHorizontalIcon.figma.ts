// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2141
// source=packages/icons/src/generated/MoreHorizontalIcon.tsx
// component=MoreHorizontalIcon
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
  example: figma.code`<MoreHorizontalIcon size="${size}" />`,
  imports: ['import { MoreHorizontalIcon } from "@ads/icons"'],
  id: "ads-icon-more-horizontal",
  metadata: { nestable: true }
};
