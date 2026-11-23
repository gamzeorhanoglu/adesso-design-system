// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-2115
// source=packages/icons/src/generated/MonitorIcon.tsx
// component=MonitorIcon
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
  example: figma.code`<MonitorIcon size="${size}" />`,
  imports: ['import { MonitorIcon } from "@ads/icons"'],
  id: "ads-icon-monitor",
  metadata: { nestable: true }
};
