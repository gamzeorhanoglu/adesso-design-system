// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1478
// source=packages/icons/src/generated/FolderPlusIcon.tsx
// component=FolderPlusIcon
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
  example: figma.code`<FolderPlusIcon size="${size}" />`,
  imports: ['import { FolderPlusIcon } from "@ads/icons"'],
  id: "ads-icon-folder-plus",
  metadata: { nestable: true }
};
