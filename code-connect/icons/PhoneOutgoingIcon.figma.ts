// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2388
// source=packages/icons/src/generated/PhoneOutgoingIcon.tsx
// component=PhoneOutgoingIcon
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
  example: figma.code`<PhoneOutgoingIcon size="${size}" />`,
  imports: ['import { PhoneOutgoingIcon } from "@ads/icons"'],
  id: "ads-icon-phone-outgoing",
  metadata: { nestable: true }
};
