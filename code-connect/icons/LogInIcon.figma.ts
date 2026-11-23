// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1907
// source=packages/icons/src/generated/LogInIcon.tsx
// component=LogInIcon
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
  example: figma.code`<LogInIcon size="${size}" />`,
  imports: ['import { LogInIcon } from "@ads/icons"'],
  id: "ads-icon-log-in",
  metadata: { nestable: true }
};
