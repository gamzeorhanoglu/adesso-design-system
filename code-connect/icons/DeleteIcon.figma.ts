// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1127
// source=packages/icons/src/generated/DeleteIcon.tsx
// component=DeleteIcon
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
  example: figma.code`<DeleteIcon size="${size}" />`,
  imports: ['import { DeleteIcon } from "@ads/icons"'],
  id: "ads-icon-delete",
  metadata: { nestable: true }
};
