// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1556
// source=packages/icons/src/generated/GitMergeIcon.tsx
// component=GitMergeIcon
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
  example: figma.code`<GitMergeIcon size="${size}" />`,
  imports: ['import { GitMergeIcon } from "@ads/icons"'],
  id: "ads-icon-git-merge",
  metadata: { nestable: true }
};
