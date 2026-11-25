// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5301-815
// source=packages/ui-web/src/components/SidebarItem/SidebarItem.tsx
// component=SidebarItem
import figma from "figma";

const instance = figma.selectedInstance;
const labelLayer = instance.findText("Lorem Ipsum");
const label = labelLayer.type === "TEXT" ? labelLayer.textContent : "Lorem Ipsum";
const theme = instance.getEnum("Theme", { light: "light", dark: "dark" }) ?? "light";
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  active: "active",
  "active-hover": "active-hover",
  error: "error",
  disabled: "disabled",
}) ?? "default";
const showText = instance.getBoolean("Show Text");
const showIcon = instance.getBoolean("Show Icon");
const showArrow = instance.getBoolean("Show Arrow");
const showBadge = instance.getBoolean("Show Badge");
const icons = instance.findConnectedInstances((node) => node.name.startsWith("icon/"));
const icon = icons[0]?.executeTemplate().example;

export default {
  example: figma.code`<SidebarItem
  href="#"
  theme="${theme}"
  ${showText ? "" : figma.code`showText={false}`}
  ${showIcon ? "" : figma.code`showIcon={false}`}
  ${showArrow ? "showArrow" : ""}
  ${showBadge ? figma.code`badge="Lorem Ipsum"` : ""}
  ${state === "active" || state === "active-hover" ? "active" : ""}
  ${state === "error" ? "error" : ""}
  ${state === "disabled" ? "disabled" : ""}
  ${state === "hover" ? figma.code`data-preview-state="hover"` : ""}
  ${state === "active-hover" ? figma.code`data-preview-state="active-hover"` : ""}
  ${icon ? figma.code`icon={${icon}}` : ""}
>
  ${label}
</SidebarItem>`,
  imports: ['import { SidebarItem } from "@ads/ui-web"'],
  id: "ads-sidebar-item",
  metadata: { nestable: true, props: { runtimeState: state } },
};
