// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=223-1365
// source=packages/ui-web/src/components/Button/Button.tsx
// component=Button
import figma from "figma";

const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { large: "large", medium: "medium", small: "small" });
const state = instance.getEnum("State", { default: "default", hover: "hover", pressed: "pressed", disabled: "disabled" });
const iconPosition = instance.getEnum("Show icon", { left: "left", none: "none", right: "right" });
const textLayer = instance.findText("Button");
const label = textLayer.type === "TEXT" ? textLayer.textContent : "Button";
const iconInstance = size === "large" ? instance.getInstanceSwap("Icon Large") : size === "small" ? instance.getInstanceSwap("Icon Small") : instance.getInstanceSwap("Icon Medium");
const iconCode = iconInstance?.type === "INSTANCE" ? iconInstance.executeTemplate().example : undefined;
const iconProp = iconPosition === "left" && iconCode ? figma.code`leadingIcon={${iconCode}}` : iconPosition === "right" && iconCode ? figma.code`trailingIcon={${iconCode}}` : "";

export default {
  example: figma.code`<Button variant="destructive" size="${size}" ${state === "disabled" ? "disabled" : ""} ${iconProp}>${label}</Button>`,
  imports: ['import { Button } from "@ads/ui-web"'],
  id: "ads-button-destructive",
  metadata: { nestable: true }
};
