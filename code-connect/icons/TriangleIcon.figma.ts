// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3168
// source=packages/icons/src/generated/TriangleIcon.tsx
// component=TriangleIcon
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
  example: figma.code`<TriangleIcon size="${size}" />`,
  imports: ['import { TriangleIcon } from "@ads/icons"'],
  id: "ads-icon-triangle",
  metadata: { nestable: true }
};
