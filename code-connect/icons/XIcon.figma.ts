// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3506
// source=packages/icons/src/generated/XIcon.tsx
// component=XIcon
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
  example: figma.code`<XIcon size="${size}" />`,
  imports: ['import { XIcon } from "@ads/icons"'],
  id: "ads-icon-x",
  metadata: { nestable: true }
};
