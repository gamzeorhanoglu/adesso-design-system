// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3584
// source=packages/icons/src/generated/ZapOffIcon.tsx
// component=ZapOffIcon
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
  example: figma.code`<ZapOffIcon size="${size}" />`,
  imports: ['import { ZapOffIcon } from "@ads/icons"'],
  id: "ads-icon-zap-off",
  metadata: { nestable: true }
};
