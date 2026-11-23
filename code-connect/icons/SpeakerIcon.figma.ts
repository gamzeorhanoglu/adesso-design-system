// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2882
// source=packages/icons/src/generated/SpeakerIcon.tsx
// component=SpeakerIcon
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
  example: figma.code`<SpeakerIcon size="${size}" />`,
  imports: ['import { SpeakerIcon } from "@ads/icons"'],
  id: "ads-icon-speaker",
  metadata: { nestable: true }
};
