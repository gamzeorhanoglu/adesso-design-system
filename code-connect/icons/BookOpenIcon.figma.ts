// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-477
// source=packages/icons/src/generated/BookOpenIcon.tsx
// component=BookOpenIcon
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
  example: figma.code`<BookOpenIcon size="${size}" />`,
  imports: ['import { BookOpenIcon } from "@ads/icons"'],
  id: "ads-icon-book-open",
  metadata: { nestable: true }
};
