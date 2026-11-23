// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3324
// source=packages/icons/src/generated/UserCheckIcon.tsx
// component=UserCheckIcon
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
  example: figma.code`<UserCheckIcon size="${size}" />`,
  imports: ['import { UserCheckIcon } from "@ads/icons"'],
  id: "ads-icon-user-check",
  metadata: { nestable: true }
};
