// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-490
// source=packages/icons/src/generated/BookmarkIcon.tsx
// component=BookmarkIcon
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
  example: figma.code`<BookmarkIcon size="${size}" />`,
  imports: ['import { BookmarkIcon } from "@ads/icons"'],
  id: "ads-icon-bookmark",
  metadata: { nestable: true }
};
