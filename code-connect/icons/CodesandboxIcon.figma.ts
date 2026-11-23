// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-880
// source=packages/icons/src/generated/CodesandboxIcon.tsx
// component=CodesandboxIcon
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
  example: figma.code`<CodesandboxIcon size="${size}" />`,
  imports: ['import { CodesandboxIcon } from "@ads/icons"'],
  id: "ads-icon-codesandbox",
  metadata: { nestable: true }
};
