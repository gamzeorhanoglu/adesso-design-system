// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2167
// source=packages/icons/src/generated/MousePointerIcon.tsx
// component=MousePointerIcon
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
  example: figma.code`<MousePointerIcon size="${size}" />`,
  imports: ['import { MousePointerIcon } from "@ads/icons"'],
  id: "ads-icon-mouse-pointer",
  metadata: { nestable: true }
};
