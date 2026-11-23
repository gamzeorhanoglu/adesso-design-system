// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2135-399
// source=packages/icons/src/generated/BatteryChargingIcon.tsx
// component=BatteryChargingIcon
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
  example: figma.code`<BatteryChargingIcon size="${size}" />`,
  imports: ['import { BatteryChargingIcon } from "@ads/icons"'],
  id: "ads-icon-battery-charging",
  metadata: { nestable: true }
};
