// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1790
// source=packages/icons/src/generated/KeyIcon.tsx
// component=KeyIcon
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
  example: figma.code`<KeyIcon size="${size}" />`,
  imports: ['import { KeyIcon } from "@ads/icons"'],
  id: "ads-icon-key",
  metadata: { nestable: true }
};
