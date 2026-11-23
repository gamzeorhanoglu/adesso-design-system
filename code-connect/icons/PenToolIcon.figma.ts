// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2284
// source=packages/icons/src/generated/PenToolIcon.tsx
// component=PenToolIcon
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
  example: figma.code`<PenToolIcon size="${size}" />`,
  imports: ['import { PenToolIcon } from "@ads/icons"'],
  id: "ads-icon-pen-tool",
  metadata: { nestable: true }
};
