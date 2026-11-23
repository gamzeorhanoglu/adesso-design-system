// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2349
// source=packages/icons/src/generated/PhoneIncomingIcon.tsx
// component=PhoneIncomingIcon
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
  example: figma.code`<PhoneIncomingIcon size="${size}" />`,
  imports: ['import { PhoneIncomingIcon } from "@ads/icons"'],
  id: "ads-icon-phone-incoming",
  metadata: { nestable: true }
};
