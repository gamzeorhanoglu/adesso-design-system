// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2908
// source=packages/icons/src/generated/StarIcon.tsx
// component=StarIcon
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
  example: figma.code`<StarIcon size="${size}" />`,
  imports: ['import { StarIcon } from "@ads/icons"'],
  id: "ads-icon-star",
  metadata: { nestable: true }
};
