// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2063
// source=packages/icons/src/generated/MinimizeIcon.tsx
// component=MinimizeIcon
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
  example: figma.code`<MinimizeIcon size="${size}" />`,
  imports: ['import { MinimizeIcon } from "@ads/icons"'],
  id: "ads-icon-minimize",
  metadata: { nestable: true }
};
