// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-373
// source=packages/icons/src/generated/BarChart2Icon.tsx
// component=BarChart2Icon
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
  example: figma.code`<BarChart2Icon size="${size}" />`,
  imports: ['import { BarChart2Icon } from "@ads/icons"'],
  id: "ads-icon-bar-chart-2",
  metadata: { nestable: true }
};
