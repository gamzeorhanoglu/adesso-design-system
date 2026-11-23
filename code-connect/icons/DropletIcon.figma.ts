// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1244
// source=packages/icons/src/generated/DropletIcon.tsx
// component=DropletIcon
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
  example: figma.code`<DropletIcon size="${size}" />`,
  imports: ['import { DropletIcon } from "@ads/icons"'],
  id: "ads-icon-droplet",
  metadata: { nestable: true }
};
