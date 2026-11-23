// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3220
// source=packages/icons/src/generated/TwitterIcon.tsx
// component=TwitterIcon
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
  example: figma.code`<TwitterIcon size="${size}" />`,
  imports: ['import { TwitterIcon } from "@ads/icons"'],
  id: "ads-icon-twitter",
  metadata: { nestable: true }
};
