// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-568
// source=packages/icons/src/generated/CastIcon.tsx
// component=CastIcon
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
  example: figma.code`<CastIcon size="${size}" />`,
  imports: ['import { CastIcon } from "@ads/icons"'],
  id: "ads-icon-cast",
  metadata: { nestable: true }
};
