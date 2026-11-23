// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3129
// source=packages/icons/src/generated/TrelloIcon.tsx
// component=TrelloIcon
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
  example: figma.code`<TrelloIcon size="${size}" />`,
  imports: ['import { TrelloIcon } from "@ads/icons"'],
  id: "ads-icon-trello",
  metadata: { nestable: true }
};
