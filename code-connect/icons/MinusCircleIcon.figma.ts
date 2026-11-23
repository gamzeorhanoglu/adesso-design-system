// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2089
// source=packages/icons/src/generated/MinusCircleIcon.tsx
// component=MinusCircleIcon
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
  example: figma.code`<MinusCircleIcon size="${size}" />`,
  imports: ['import { MinusCircleIcon } from "@ads/icons"'],
  id: "ads-icon-minus-circle",
  metadata: { nestable: true }
};
