// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-139
// source=packages/icons/src/generated/AnchorIcon.tsx
// component=AnchorIcon
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
  example: figma.code`<AnchorIcon size="${size}" />`,
  imports: ['import { AnchorIcon } from "@ads/icons"'],
  id: "ads-icon-anchor",
  metadata: { nestable: true }
};
