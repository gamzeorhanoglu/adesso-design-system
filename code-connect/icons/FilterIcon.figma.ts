// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1426
// source=packages/icons/src/generated/FilterIcon.tsx
// component=FilterIcon
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
  example: figma.code`<FilterIcon size="${size}" />`,
  imports: ['import { FilterIcon } from "@ads/icons"'],
  id: "ads-icon-filter",
  metadata: { nestable: true }
};
