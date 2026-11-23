// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-867
// source=packages/icons/src/generated/CodepenIcon.tsx
// component=CodepenIcon
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
  example: figma.code`<CodepenIcon size="${size}" />`,
  imports: ['import { CodepenIcon } from "@ads/icons"'],
  id: "ads-icon-codepen",
  metadata: { nestable: true }
};
