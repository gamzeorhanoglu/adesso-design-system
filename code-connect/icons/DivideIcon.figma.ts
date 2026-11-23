// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1153
// source=packages/icons/src/generated/DivideIcon.tsx
// component=DivideIcon
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
  example: figma.code`<DivideIcon size="${size}" />`,
  imports: ['import { DivideIcon } from "@ads/icons"'],
  id: "ads-icon-divide",
  metadata: { nestable: true }
};
