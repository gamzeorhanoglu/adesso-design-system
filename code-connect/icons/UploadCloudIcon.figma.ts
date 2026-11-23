// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-3298
// source=packages/icons/src/generated/UploadCloudIcon.tsx
// component=UploadCloudIcon
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
  example: figma.code`<UploadCloudIcon size="${size}" />`,
  imports: ['import { UploadCloudIcon } from "@ads/icons"'],
  id: "ads-icon-upload-cloud",
  metadata: { nestable: true }
};
