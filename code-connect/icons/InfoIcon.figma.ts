// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1751
// source=packages/icons/src/generated/InfoIcon.tsx
// component=InfoIcon
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
  example: figma.code`<InfoIcon size="${size}" />`,
  imports: ['import { InfoIcon } from "@ads/icons"'],
  id: "ads-icon-info",
  metadata: { nestable: true }
};
