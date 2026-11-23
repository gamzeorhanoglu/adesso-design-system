// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1855
// source=packages/icons/src/generated/LinkedinIcon.tsx
// component=LinkedinIcon
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
  example: figma.code`<LinkedinIcon size="${size}" />`,
  imports: ['import { LinkedinIcon } from "@ads/icons"'],
  id: "ads-icon-linkedin",
  metadata: { nestable: true }
};
