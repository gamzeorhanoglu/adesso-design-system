// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3025
// source=packages/icons/src/generated/TerminalIcon.tsx
// component=TerminalIcon
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
  example: figma.code`<TerminalIcon size="${size}" />`,
  imports: ['import { TerminalIcon } from "@ads/icons"'],
  id: "ads-icon-terminal",
  metadata: { nestable: true }
};
