// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2674
// source=packages/icons/src/generated/ServerIcon.tsx
// component=ServerIcon
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
  example: figma.code`<ServerIcon size="${size}" />`,
  imports: ['import { ServerIcon } from "@ads/icons"'],
  id: "ads-icon-server",
  metadata: { nestable: true }
};
