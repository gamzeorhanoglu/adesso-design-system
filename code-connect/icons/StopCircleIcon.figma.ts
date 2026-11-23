// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2921
// source=packages/icons/src/generated/StopCircleIcon.tsx
// component=StopCircleIcon
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
  example: figma.code`<StopCircleIcon size="${size}" />`,
  imports: ['import { StopCircleIcon } from "@ads/icons"'],
  id: "ads-icon-stop-circle",
  metadata: { nestable: true }
};
