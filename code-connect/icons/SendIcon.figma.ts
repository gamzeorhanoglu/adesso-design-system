// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2661
// source=packages/icons/src/generated/SendIcon.tsx
// component=SendIcon
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
  example: figma.code`<SendIcon size="${size}" />`,
  imports: ['import { SendIcon } from "@ads/icons"'],
  id: "ads-icon-send",
  metadata: { nestable: true }
};
