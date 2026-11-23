// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-1218
// source=packages/icons/src/generated/DownloadCloudIcon.tsx
// component=DownloadCloudIcon
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
  example: figma.code`<DownloadCloudIcon size="${size}" />`,
  imports: ['import { DownloadCloudIcon } from "@ads/icons"'],
  id: "ads-icon-download-cloud",
  metadata: { nestable: true }
};
