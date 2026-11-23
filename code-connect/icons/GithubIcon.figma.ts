// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1582
// source=packages/icons/src/generated/GithubIcon.tsx
// component=GithubIcon
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
  example: figma.code`<GithubIcon size="${size}" />`,
  imports: ['import { GithubIcon } from "@ads/icons"'],
  id: "ads-icon-github",
  metadata: { nestable: true }
};
