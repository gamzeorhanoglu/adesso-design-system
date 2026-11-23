// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-529
// source=packages/icons/src/generated/CalendarIcon.tsx
// component=CalendarIcon
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
  example: figma.code`<CalendarIcon size="${size}" />`,
  imports: ['import { CalendarIcon } from "@ads/icons"'],
  id: "ads-icon-calendar",
  metadata: { nestable: true }
};
