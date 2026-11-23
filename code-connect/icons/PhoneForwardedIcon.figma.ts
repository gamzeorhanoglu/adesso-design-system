// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2336
// source=packages/icons/src/generated/PhoneForwardedIcon.tsx
// component=PhoneForwardedIcon
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
  example: figma.code`<PhoneForwardedIcon size="${size}" />`,
  imports: ['import { PhoneForwardedIcon } from "@ads/icons"'],
  id: "ads-icon-phone-forwarded",
  metadata: { nestable: true }
};
