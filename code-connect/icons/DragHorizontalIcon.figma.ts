// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2178-1117
// source=packages/icons/src/generated/DragHorizontalIcon.tsx
// component=DragHorizontalIcon
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
  example: figma.code`<DragHorizontalIcon size="${size}" />`,
  imports: ['import { DragHorizontalIcon } from "@ads/icons"'],
  id: "ads-icon-drag-horizontal",
  metadata: { nestable: true }
};
