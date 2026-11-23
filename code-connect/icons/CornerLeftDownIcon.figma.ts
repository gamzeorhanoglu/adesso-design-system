// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-984
// source=packages/icons/src/generated/CornerLeftDownIcon.tsx
// component=CornerLeftDownIcon
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
  example: figma.code`<CornerLeftDownIcon size="${size}" />`,
  imports: ['import { CornerLeftDownIcon } from "@ads/icons"'],
  id: "ads-icon-corner-left-down",
  metadata: { nestable: true }
};
