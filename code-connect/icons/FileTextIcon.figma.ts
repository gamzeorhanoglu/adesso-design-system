// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1400
// source=packages/icons/src/generated/FileTextIcon.tsx
// component=FileTextIcon
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
  example: figma.code`<FileTextIcon size="${size}" />`,
  imports: ['import { FileTextIcon } from "@ads/icons"'],
  id: "ads-icon-file-text",
  metadata: { nestable: true }
};
