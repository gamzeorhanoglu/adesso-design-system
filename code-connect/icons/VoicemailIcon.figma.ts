// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3415
// source=packages/icons/src/generated/VoicemailIcon.tsx
// component=VoicemailIcon
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
  example: figma.code`<VoicemailIcon size="${size}" />`,
  imports: ['import { VoicemailIcon } from "@ads/icons"'],
  id: "ads-icon-voicemail",
  metadata: { nestable: true }
};
