// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3337
// source=packages/icons/src/generated/UserMinusIcon.tsx
// component=UserMinusIcon
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
  example: figma.code`<UserMinusIcon size="${size}" />`,
  imports: ['import { UserMinusIcon } from "@ads/icons"'],
  id: "ads-icon-user-minus",
  metadata: { nestable: true }
};
