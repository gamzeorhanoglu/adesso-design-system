// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2557
// source=packages/icons/src/generated/RepeatIcon.tsx
// component=RepeatIcon
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
  example: figma.code`<RepeatIcon size="${size}" />`,
  imports: ['import { RepeatIcon } from "@ads/icons"'],
  id: "ads-icon-repeat",
  metadata: { nestable: true }
};
