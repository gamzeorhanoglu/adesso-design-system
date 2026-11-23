// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1842
// source=packages/icons/src/generated/LinkIcon.tsx
// component=LinkIcon
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
  example: figma.code`<LinkIcon size="${size}" />`,
  imports: ['import { LinkIcon } from "@ads/icons"'],
  id: "ads-icon-link",
  metadata: { nestable: true }
};
