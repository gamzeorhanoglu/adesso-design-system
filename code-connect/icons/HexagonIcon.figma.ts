// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1699
// source=packages/icons/src/generated/HexagonIcon.tsx
// component=HexagonIcon
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
  example: figma.code`<HexagonIcon size="${size}" />`,
  imports: ['import { HexagonIcon } from "@ads/icons"'],
  id: "ads-icon-hexagon",
  metadata: { nestable: true }
};
