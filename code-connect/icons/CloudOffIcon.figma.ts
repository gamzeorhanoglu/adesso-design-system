// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-815
// source=packages/icons/src/generated/CloudOffIcon.tsx
// component=CloudOffIcon
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
  example: figma.code`<CloudOffIcon size="${size}" />`,
  imports: ['import { CloudOffIcon } from "@ads/icons"'],
  id: "ads-icon-cloud-off",
  metadata: { nestable: true }
};
