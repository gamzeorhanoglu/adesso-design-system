// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1439
// source=packages/icons/src/generated/FlagIcon.tsx
// component=FlagIcon
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
  example: figma.code`<FlagIcon size="${size}" />`,
  imports: ['import { FlagIcon } from "@ads/icons"'],
  id: "ads-icon-flag",
  metadata: { nestable: true }
};
