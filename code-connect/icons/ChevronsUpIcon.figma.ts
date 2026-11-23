// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-711
// source=packages/icons/src/generated/ChevronsUpIcon.tsx
// component=ChevronsUpIcon
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
  example: figma.code`<ChevronsUpIcon size="${size}" />`,
  imports: ['import { ChevronsUpIcon } from "@ads/icons"'],
  id: "ads-icon-chevrons-up",
  metadata: { nestable: true }
};
