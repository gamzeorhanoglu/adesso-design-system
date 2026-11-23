// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2219
// source=packages/icons/src/generated/OctagonIcon.tsx
// component=OctagonIcon
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
  example: figma.code`<OctagonIcon size="${size}" />`,
  imports: ['import { OctagonIcon } from "@ads/icons"'],
  id: "ads-icon-octagon",
  metadata: { nestable: true }
};
