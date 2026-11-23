// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=223-2525
// source=packages/ui-web/src/components/Button/Button.tsx
// component=Button
import figma from "figma";

const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { large: "large", medium: "medium", small: "small" });
const state = instance.getEnum("State", { default: "default", hover: "hover", pressed: "pressed", disabled: "disabled" });
const iconInstance = size === "large" ? instance.getInstanceSwap("Icon Large") : size === "small" ? instance.getInstanceSwap("Icon Small") : instance.getInstanceSwap("Icon Medium");
const iconCode = iconInstance?.type === "INSTANCE" ? iconInstance.executeTemplate().example : undefined;

export default {
  example: figma.code`<Button variant="icon-only" size="${size}" aria-label="Icon action" ${state === "disabled" ? "disabled" : ""}>${iconCode}</Button>`,
  imports: ['import { Button } from "@ads/ui-web"'],
  id: "ads-button-icon-only",
  metadata: { nestable: true }
};
