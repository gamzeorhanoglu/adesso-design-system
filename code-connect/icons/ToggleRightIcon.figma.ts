// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3090
// source=packages/icons/src/generated/ToggleRightIcon.tsx
// component=ToggleRightIcon
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
  example: figma.code`<ToggleRightIcon size="${size}" />`,
  imports: ['import { ToggleRightIcon } from "@ads/icons"'],
  id: "ads-icon-toggle-right",
  metadata: { nestable: true }
};
