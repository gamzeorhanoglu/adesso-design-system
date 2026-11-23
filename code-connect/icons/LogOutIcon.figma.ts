// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1920
// source=packages/icons/src/generated/LogOutIcon.tsx
// component=LogOutIcon
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
  example: figma.code`<LogOutIcon size="${size}" />`,
  imports: ['import { LogOutIcon } from "@ads/icons"'],
  id: "ads-icon-log-out",
  metadata: { nestable: true }
};
