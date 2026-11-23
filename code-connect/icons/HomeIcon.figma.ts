// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1712
// source=packages/icons/src/generated/HomeIcon.tsx
// component=HomeIcon
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
  example: figma.code`<HomeIcon size="${size}" />`,
  imports: ['import { HomeIcon } from "@ads/icons"'],
  id: "ads-icon-home",
  metadata: { nestable: true }
};
