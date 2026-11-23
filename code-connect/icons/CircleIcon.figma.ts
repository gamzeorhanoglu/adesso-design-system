// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-737
// source=packages/icons/src/generated/CircleIcon.tsx
// component=CircleIcon
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
  example: figma.code`<CircleIcon size="${size}" />`,
  imports: ['import { CircleIcon } from "@ads/icons"'],
  id: "ads-icon-circle",
  metadata: { nestable: true }
};
