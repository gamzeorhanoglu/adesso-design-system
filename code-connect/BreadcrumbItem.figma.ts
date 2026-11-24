// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2332-3233
// source=packages/ui-web/src/components/BreadcrumbItem/BreadcrumbItem.tsx
// component=BreadcrumbItem
import figma from "figma";

const instance = figma.selectedInstance;
const labelLayer = instance.findText("Lorem Ipsum");
const label = labelLayer.type === "TEXT" ? labelLayer.textContent : "Lorem Ipsum";
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  active: "active",
  disabled: "disabled"
}) ?? "default";

export default {
  example: figma.code`<BreadcrumbItem
  ${state === "default" || state === "hover" ? 'href="#"' : ""}
  ${state === "active" ? "current" : ""}
  ${state === "disabled" ? "disabled" : ""}
>
  ${label}
</BreadcrumbItem>`,
  imports: ['import { BreadcrumbItem } from "@ads/ui-web"'],
  id: "ads-breadcrumb-item",
  metadata: {
    nestable: true,
    props: { runtimeState: state === "hover" ? "hover-is-runtime-managed" : state }
  }
};
