// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-906
// source=packages/icons/src/generated/ColumnsIcon.tsx
// component=ColumnsIcon
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
  example: figma.code`<ColumnsIcon size="${size}" />`,
  imports: ['import { ColumnsIcon } from "@ads/icons"'],
  id: "ads-icon-columns",
  metadata: { nestable: true }
};
