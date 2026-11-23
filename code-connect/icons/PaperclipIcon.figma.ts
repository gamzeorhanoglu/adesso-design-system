// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2245
// source=packages/icons/src/generated/PaperclipIcon.tsx
// component=PaperclipIcon
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
  example: figma.code`<PaperclipIcon size="${size}" />`,
  imports: ['import { PaperclipIcon } from "@ads/icons"'],
  id: "ads-icon-paperclip",
  metadata: { nestable: true }
};
