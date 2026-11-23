// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1972
// source=packages/icons/src/generated/MaximizeIcon.tsx
// component=MaximizeIcon
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
  example: figma.code`<MaximizeIcon size="${size}" />`,
  imports: ['import { MaximizeIcon } from "@ads/icons"'],
  id: "ads-icon-maximize",
  metadata: { nestable: true }
};
