// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2791
// source=packages/icons/src/generated/SkipBackIcon.tsx
// component=SkipBackIcon
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
  example: figma.code`<SkipBackIcon size="${size}" />`,
  imports: ['import { SkipBackIcon } from "@ads/icons"'],
  id: "ads-icon-skip-back",
  metadata: { nestable: true }
};
