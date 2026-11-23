// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-893
// source=packages/icons/src/generated/CoffeeIcon.tsx
// component=CoffeeIcon
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
  example: figma.code`<CoffeeIcon size="${size}" />`,
  imports: ['import { CoffeeIcon } from "@ads/icons"'],
  id: "ads-icon-coffee",
  metadata: { nestable: true }
};
