// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1998
// source=packages/icons/src/generated/MenuIcon.tsx
// component=MenuIcon
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
  example: figma.code`<MenuIcon size="${size}" />`,
  imports: ['import { MenuIcon } from "@ads/icons"'],
  id: "ads-icon-menu",
  metadata: { nestable: true }
};
