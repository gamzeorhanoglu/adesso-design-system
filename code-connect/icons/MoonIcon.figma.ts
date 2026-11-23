// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2128
// source=packages/icons/src/generated/MoonIcon.tsx
// component=MoonIcon
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
  example: figma.code`<MoonIcon size="${size}" />`,
  imports: ['import { MoonIcon } from "@ads/icons"'],
  id: "ads-icon-moon",
  metadata: { nestable: true }
};
