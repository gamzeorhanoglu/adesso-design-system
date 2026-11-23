// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1530
// source=packages/icons/src/generated/GitBranchIcon.tsx
// component=GitBranchIcon
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
  example: figma.code`<GitBranchIcon size="${size}" />`,
  imports: ['import { GitBranchIcon } from "@ads/icons"'],
  id: "ads-icon-git-branch",
  metadata: { nestable: true }
};
