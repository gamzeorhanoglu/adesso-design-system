// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2232
// source=packages/icons/src/generated/PackageIcon.tsx
// component=PackageIcon
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
  example: figma.code`<PackageIcon size="${size}" />`,
  imports: ['import { PackageIcon } from "@ads/icons"'],
  id: "ads-icon-package",
  metadata: { nestable: true }
};
