// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3259
// source=packages/icons/src/generated/UnderlineIcon.tsx
// component=UnderlineIcon
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
  example: figma.code`<UnderlineIcon size="${size}" />`,
  imports: ['import { UnderlineIcon } from "@ads/icons"'],
  id: "ads-icon-underline",
  metadata: { nestable: true }
};
