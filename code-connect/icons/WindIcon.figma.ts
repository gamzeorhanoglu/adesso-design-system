// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3493
// source=packages/icons/src/generated/WindIcon.tsx
// component=WindIcon
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
  example: figma.code`<WindIcon size="${size}" />`,
  imports: ['import { WindIcon } from "@ads/icons"'],
  id: "ads-icon-wind",
  metadata: { nestable: true }
};
