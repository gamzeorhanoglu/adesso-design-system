// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3077
// source=packages/icons/src/generated/ToggleLeftIcon.tsx
// component=ToggleLeftIcon
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
  example: figma.code`<ToggleLeftIcon size="${size}" />`,
  imports: ['import { ToggleLeftIcon } from "@ads/icons"'],
  id: "ads-icon-toggle-left",
  metadata: { nestable: true }
};
