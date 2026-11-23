// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-464
// source=packages/icons/src/generated/BookIcon.tsx
// component=BookIcon
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
  example: figma.code`<BookIcon size="${size}" />`,
  imports: ['import { BookIcon } from "@ads/icons"'],
  id: "ads-icon-book",
  metadata: { nestable: true }
};
