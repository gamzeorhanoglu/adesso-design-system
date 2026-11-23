// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2973
// source=packages/icons/src/generated/TableIcon.tsx
// component=TableIcon
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
  example: figma.code`<TableIcon size="${size}" />`,
  imports: ['import { TableIcon } from "@ads/icons"'],
  id: "ads-icon-table",
  metadata: { nestable: true }
};
