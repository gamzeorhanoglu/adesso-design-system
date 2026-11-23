// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1231
// source=packages/icons/src/generated/DribbbleIcon.tsx
// component=DribbbleIcon
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
  example: figma.code`<DribbbleIcon size="${size}" />`,
  imports: ['import { DribbbleIcon } from "@ads/icons"'],
  id: "ads-icon-dribbble",
  metadata: { nestable: true }
};
