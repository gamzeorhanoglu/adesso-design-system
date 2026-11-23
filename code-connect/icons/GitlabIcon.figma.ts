// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1595
// source=packages/icons/src/generated/GitlabIcon.tsx
// component=GitlabIcon
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
  example: figma.code`<GitlabIcon size="${size}" />`,
  imports: ['import { GitlabIcon } from "@ads/icons"'],
  id: "ads-icon-gitlab",
  metadata: { nestable: true }
};
