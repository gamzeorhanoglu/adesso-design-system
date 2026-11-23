// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1140
// source=packages/icons/src/generated/DiscIcon.tsx
// component=DiscIcon
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
  example: figma.code`<DiscIcon size="${size}" />`,
  imports: ['import { DiscIcon } from "@ads/icons"'],
  id: "ads-icon-disc",
  metadata: { nestable: true }
};
