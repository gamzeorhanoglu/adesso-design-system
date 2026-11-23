// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=245-158
// source=packages/ui-web/src/components/Switch/Switch.tsx
// component=Switch
import figma from "figma";

const instance = figma.selectedInstance;
const status = instance.getEnum("status", {
  active: "active",
  inactive: "inactive"
});
const state = instance.getEnum("state", {
  enabled: "enabled",
  disabled: "disabled",
  hover: "hover"
});

export default {
  example: figma.code`
    <Switch
      aria-label="Switch"
      size="desktop"
      ${status === "active" ? "defaultChecked" : ""}
      ${state === "disabled" ? "disabled" : ""}
    />
  `,
  imports: ['import { Switch } from "@ads/ui-web"'],
  id: "ads-switch-desktop",
  metadata: {
    nestable: true,
    props: { runtimeState: state === "hover" ? "hover-is-runtime-managed" : state }
  }
};
