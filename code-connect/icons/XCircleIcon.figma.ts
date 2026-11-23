// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3519
// source=packages/icons/src/generated/XCircleIcon.tsx
// component=XCircleIcon
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
  example: figma.code`<XCircleIcon size="${size}" />`,
  imports: ['import { XCircleIcon } from "@ads/icons"'],
  id: "ads-icon-x-circle",
  metadata: { nestable: true }
};
