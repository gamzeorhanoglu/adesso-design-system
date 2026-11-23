// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3233
// source=packages/icons/src/generated/TypeIcon.tsx
// component=TypeIcon
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
  example: figma.code`<TypeIcon size="${size}" />`,
  imports: ['import { TypeIcon } from "@ads/icons"'],
  id: "ads-icon-type",
  metadata: { nestable: true }
};
