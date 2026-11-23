// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-22
// source=packages/icons/src/generated/ActivityIcon.tsx
// component=ActivityIcon
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
  example: figma.code`<ActivityIcon size="${size}" />`,
  imports: ['import { ActivityIcon } from "@ads/icons"'],
  id: "ads-icon-activity",
  metadata: { nestable: true }
};
