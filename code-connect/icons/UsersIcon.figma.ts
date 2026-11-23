// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3376
// source=packages/icons/src/generated/UsersIcon.tsx
// component=UsersIcon
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
  example: figma.code`<UsersIcon size="${size}" />`,
  imports: ['import { UsersIcon } from "@ads/icons"'],
  id: "ads-icon-users",
  metadata: { nestable: true }
};
