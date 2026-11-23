// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1166
// source=packages/icons/src/generated/DivideCircleIcon.tsx
// component=DivideCircleIcon
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
  example: figma.code`<DivideCircleIcon size="${size}" />`,
  imports: ['import { DivideCircleIcon } from "@ads/icons"'],
  id: "ads-icon-divide-circle",
  metadata: { nestable: true }
};
