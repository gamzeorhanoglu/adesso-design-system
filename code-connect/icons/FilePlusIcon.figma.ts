// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1387
// source=packages/icons/src/generated/FilePlusIcon.tsx
// component=FilePlusIcon
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
  example: figma.code`<FilePlusIcon size="${size}" />`,
  imports: ['import { FilePlusIcon } from "@ads/icons"'],
  id: "ads-icon-file-plus",
  metadata: { nestable: true }
};
