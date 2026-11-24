// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2334-5718
// source=packages/ui-web/src/components/NavigationItem/NavigationItem.tsx
// component=NavigationItem
import figma from "figma";

const instance = figma.selectedInstance;
const labelLayer = instance.findText("Lorem Ipsum");
const label = labelLayer.type === "TEXT" ? labelLayer.textContent : "Lorem Ipsum";
const device = instance.getEnum("Device", {
  desktop: "desktop",
  mobile: "mobile"
}) ?? "desktop";
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  selected: "selected"
}) ?? "default";

export default {
  example: figma.code`<NavigationItem
  href="#"
  device="${device}"
  ${state === "selected" ? "selected" : ""}
>
  ${label}
</NavigationItem>`,
  imports: ['import { NavigationItem } from "@ads/ui-web"'],
  id: "ads-navigation-item",
  metadata: {
    nestable: true,
    props: { runtimeState: state === "hover" ? "hover-is-runtime-managed" : state }
  }
};
