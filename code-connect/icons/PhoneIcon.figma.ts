// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2310
// source=packages/icons/src/generated/PhoneIcon.tsx
// component=PhoneIcon
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
  example: figma.code`<PhoneIcon size="${size}" />`,
  imports: ['import { PhoneIcon } from "@ads/icons"'],
  id: "ads-icon-phone",
  metadata: { nestable: true }
};
