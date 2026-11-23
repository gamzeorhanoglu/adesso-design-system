// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-724
// source=packages/icons/src/generated/ChromeIcon.tsx
// component=ChromeIcon
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
  example: figma.code`<ChromeIcon size="${size}" />`,
  imports: ['import { ChromeIcon } from "@ads/icons"'],
  id: "ads-icon-chrome",
  metadata: { nestable: true }
};
