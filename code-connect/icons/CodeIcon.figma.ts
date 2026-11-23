// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-854
// source=packages/icons/src/generated/CodeIcon.tsx
// component=CodeIcon
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
  example: figma.code`<CodeIcon size="${size}" />`,
  imports: ['import { CodeIcon } from "@ads/icons"'],
  id: "ads-icon-code",
  metadata: { nestable: true }
};
