// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-945
// source=packages/icons/src/generated/CopyIcon.tsx
// component=CopyIcon
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
  example: figma.code`<CopyIcon size="${size}" />`,
  imports: ['import { CopyIcon } from "@ads/icons"'],
  id: "ads-icon-copy",
  metadata: { nestable: true }
};
