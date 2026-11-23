// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2739
// source=packages/icons/src/generated/ShoppingBagIcon.tsx
// component=ShoppingBagIcon
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
  example: figma.code`<ShoppingBagIcon size="${size}" />`,
  imports: ['import { ShoppingBagIcon } from "@ads/icons"'],
  id: "ads-icon-shopping-bag",
  metadata: { nestable: true }
};
