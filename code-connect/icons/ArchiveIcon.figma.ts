// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-165
// source=packages/icons/src/generated/ArchiveIcon.tsx
// component=ArchiveIcon
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
  example: figma.code`<ArchiveIcon size="${size}" />`,
  imports: ['import { ArchiveIcon } from "@ads/icons"'],
  id: "ads-icon-archive",
  metadata: { nestable: true }
};
