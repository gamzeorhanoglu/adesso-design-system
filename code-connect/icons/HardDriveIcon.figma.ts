// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1634
// source=packages/icons/src/generated/HardDriveIcon.tsx
// component=HardDriveIcon
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
  example: figma.code`<HardDriveIcon size="${size}" />`,
  imports: ['import { HardDriveIcon } from "@ads/icons"'],
  id: "ads-icon-hard-drive",
  metadata: { nestable: true }
};
