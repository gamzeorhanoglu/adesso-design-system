// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1374
// source=packages/icons/src/generated/FileMinusIcon.tsx
// component=FileMinusIcon
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
  example: figma.code`<FileMinusIcon size="${size}" />`,
  imports: ['import { FileMinusIcon } from "@ads/icons"'],
  id: "ads-icon-file-minus",
  metadata: { nestable: true }
};
