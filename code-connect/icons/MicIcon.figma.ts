// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2037
// source=packages/icons/src/generated/MicIcon.tsx
// component=MicIcon
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
  example: figma.code`<MicIcon size="${size}" />`,
  imports: ['import { MicIcon } from "@ads/icons"'],
  id: "ads-icon-mic",
  metadata: { nestable: true }
};
