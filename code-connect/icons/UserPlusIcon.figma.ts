// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3350
// source=packages/icons/src/generated/UserPlusIcon.tsx
// component=UserPlusIcon
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
  example: figma.code`<UserPlusIcon size="${size}" />`,
  imports: ['import { UserPlusIcon } from "@ads/icons"'],
  id: "ads-icon-user-plus",
  metadata: { nestable: true }
};
