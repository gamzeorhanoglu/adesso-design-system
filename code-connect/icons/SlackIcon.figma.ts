// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2817
// source=packages/icons/src/generated/SlackIcon.tsx
// component=SlackIcon
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
  example: figma.code`<SlackIcon size="${size}" />`,
  imports: ['import { SlackIcon } from "@ads/icons"'],
  id: "ads-icon-slack",
  metadata: { nestable: true }
};
