// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1452
// source=packages/icons/src/generated/FolderIcon.tsx
// component=FolderIcon
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
  example: figma.code`<FolderIcon size="${size}" />`,
  imports: ['import { FolderIcon } from "@ads/icons"'],
  id: "ads-icon-folder",
  metadata: { nestable: true }
};
