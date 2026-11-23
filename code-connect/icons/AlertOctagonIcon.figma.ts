// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-61
// source=packages/icons/src/generated/AlertOctagonIcon.tsx
// component=AlertOctagonIcon
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
  example: figma.code`<AlertOctagonIcon size="${size}" />`,
  imports: ['import { AlertOctagonIcon } from "@ads/icons"'],
  id: "ads-icon-alert-octagon",
  metadata: { nestable: true }
};
