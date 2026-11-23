// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3272
// source=packages/icons/src/generated/UnlockIcon.tsx
// component=UnlockIcon
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
  example: figma.code`<UnlockIcon size="${size}" />`,
  imports: ['import { UnlockIcon } from "@ads/icons"'],
  id: "ads-icon-unlock",
  metadata: { nestable: true }
};
