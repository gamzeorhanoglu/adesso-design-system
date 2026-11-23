// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2334-6047
// source=packages/ui-web/src/components/Chip/Chip.tsx
// component=Chip
import figma from "figma";

const instance = figma.selectedInstance;
const labelLayer = instance.findText("Filter");
const label = labelLayer.type === "TEXT" ? labelLayer.textContent : "Filter";
const showIcon = instance.getBoolean("Show Icon");
const state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
  selected: "selected",
  disabled: "disabled"
}) ?? "default";
const size = instance.getEnum("size", {
  large: "large",
  medium: "medium",
  small: "small"
}) ?? "large";
const icon = showIcon
  ? instance.getInstanceSwap(
      size === "large" ? "Icon Large" : size === "medium" ? "Icon Medium" : "Icon Small"
    )
  : null;
const iconCode = icon?.type === "INSTANCE" ? icon.executeTemplate().example : undefined;

export default {
  example: figma.code`<Chip
  size="${size}"
  ${state === "selected" ? "selected" : ""}
  ${state === "disabled" ? "disabled" : ""}
  ${iconCode ? figma.code`icon={${iconCode}}` : ""}
>
  ${label}
</Chip>`,
  imports: ['import { Chip } from "@ads/ui-web"'],
  id: "ads-chip",
  metadata: {
    nestable: true,
    props: { runtimeState: state === "hover" ? "hover-is-runtime-managed" : state }
  }
};
