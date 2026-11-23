// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2869
// source=packages/icons/src/generated/SmileIcon.tsx
// component=SmileIcon
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
  example: figma.code`<SmileIcon size="${size}" />`,
  imports: ['import { SmileIcon } from "@ads/icons"'],
  id: "ads-icon-smile",
  metadata: { nestable: true }
};
