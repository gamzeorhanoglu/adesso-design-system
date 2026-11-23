// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=140-28279
// source=packages/ui-web/src/components/Button/Button.tsx
// component=Button
import figma from "figma";

const instance = figma.selectedInstance;
const size = instance.getEnum("Size", {
  large: "large",
  medium: "medium",
  small: "small"
});
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  pressed: "pressed",
  disabled: "disabled"
});
const iconPosition = instance.getEnum("Show icon", {
  left: "left",
  none: "none",
  right: "right"
});
const textLayer = instance.findText("Button");
const label = textLayer.type === "TEXT" ? textLayer.textContent : "Button";
const largeIcon = instance.getInstanceSwap("Icon Large");
const mediumIcon = instance.getInstanceSwap("Icon Medium");
const smallIcon = instance.getInstanceSwap("Icon Small");
const iconInstance = size === "large" ? largeIcon : size === "small" ? smallIcon : mediumIcon;
const iconCode =
  iconInstance && iconInstance.type === "INSTANCE"
    ? iconInstance.executeTemplate().example
    : undefined;
const iconProp =
  iconPosition === "left" && iconCode
    ? figma.code`leadingIcon={${iconCode}}`
    : iconPosition === "right" && iconCode
      ? figma.code`trailingIcon={${iconCode}}`
      : "";

export default {
  example: figma.code`<Button size="${size}" ${state === "disabled" ? "disabled" : ""} ${iconProp}>${label}</Button>`,
  imports: ['import { Button } from "@ads/ui-web"'],
  id: "ads-button",
  metadata: { nestable: true }
};
