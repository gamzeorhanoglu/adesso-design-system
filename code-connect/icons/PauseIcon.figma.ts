// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2258
// source=packages/icons/src/generated/PauseIcon.tsx
// component=PauseIcon
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
  example: figma.code`<PauseIcon size="${size}" />`,
  imports: ['import { PauseIcon } from "@ads/icons"'],
  id: "ads-icon-pause",
  metadata: { nestable: true }
};
