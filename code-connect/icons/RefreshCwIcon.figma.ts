// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2544
// source=packages/icons/src/generated/RefreshCwIcon.tsx
// component=RefreshCwIcon
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
  example: figma.code`<RefreshCwIcon size="${size}" />`,
  imports: ['import { RefreshCwIcon } from "@ads/icons"'],
  id: "ads-icon-refresh-cw",
  metadata: { nestable: true }
};
