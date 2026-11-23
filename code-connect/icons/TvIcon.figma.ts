// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3194
// source=packages/icons/src/generated/TvIcon.tsx
// component=TvIcon
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
  example: figma.code`<TvIcon size="${size}" />`,
  imports: ['import { TvIcon } from "@ads/icons"'],
  id: "ads-icon-tv",
  metadata: { nestable: true }
};
