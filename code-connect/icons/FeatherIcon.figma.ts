// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1335
// source=packages/icons/src/generated/FeatherIcon.tsx
// component=FeatherIcon
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
  example: figma.code`<FeatherIcon size="${size}" />`,
  imports: ['import { FeatherIcon } from "@ads/icons"'],
  id: "ads-icon-feather",
  metadata: { nestable: true }
};
