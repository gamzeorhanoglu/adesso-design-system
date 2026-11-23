// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1543
// source=packages/icons/src/generated/GitCommitIcon.tsx
// component=GitCommitIcon
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
  example: figma.code`<GitCommitIcon size="${size}" />`,
  imports: ['import { GitCommitIcon } from "@ads/icons"'],
  id: "ads-icon-git-commit",
  metadata: { nestable: true }
};
