// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2609
// source=packages/icons/src/generated/RssIcon.tsx
// component=RssIcon
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
  example: figma.code`<RssIcon size="${size}" />`,
  imports: ['import { RssIcon } from "@ads/icons"'],
  id: "ads-icon-rss",
  metadata: { nestable: true }
};
