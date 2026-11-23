// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2648
// source=packages/icons/src/generated/SearchIcon.tsx
// component=SearchIcon
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
  example: figma.code`<SearchIcon size="${size}" />`,
  imports: ['import { SearchIcon } from "@ads/icons"'],
  id: "ads-icon-search",
  metadata: { nestable: true }
};
