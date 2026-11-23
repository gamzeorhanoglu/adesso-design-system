// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1738
// source=packages/icons/src/generated/InboxIcon.tsx
// component=InboxIcon
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
  example: figma.code`<InboxIcon size="${size}" />`,
  imports: ['import { InboxIcon } from "@ads/icons"'],
  id: "ads-icon-inbox",
  metadata: { nestable: true }
};
