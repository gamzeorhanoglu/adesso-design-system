// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3103
// source=packages/icons/src/generated/ToolIcon.tsx
// component=ToolIcon
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
  example: figma.code`<ToolIcon size="${size}" />`,
  imports: ['import { ToolIcon } from "@ads/icons"'],
  id: "ads-icon-tool",
  metadata: { nestable: true }
};
