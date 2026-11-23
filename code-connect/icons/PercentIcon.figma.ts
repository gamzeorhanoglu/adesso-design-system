// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2297
// source=packages/icons/src/generated/PercentIcon.tsx
// component=PercentIcon
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
  example: figma.code`<PercentIcon size="${size}" />`,
  imports: ['import { PercentIcon } from "@ads/icons"'],
  id: "ads-icon-percent",
  metadata: { nestable: true }
};
