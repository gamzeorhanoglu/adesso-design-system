// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-672
// source=packages/icons/src/generated/ChevronsDownIcon.tsx
// component=ChevronsDownIcon
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
  example: figma.code`<ChevronsDownIcon size="${size}" />`,
  imports: ['import { ChevronsDownIcon } from "@ads/icons"'],
  id: "ads-icon-chevrons-down",
  metadata: { nestable: true }
};
