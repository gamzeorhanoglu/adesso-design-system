// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5301-998
// source=packages/ui-web/src/components/Sidebar/Sidebar.tsx
// component=Sidebar
import figma from "figma";

const instance = figma.selectedInstance;
const theme = instance.getEnum("Theme", { light: "light", dark: "dark" }) ?? "light";
const state = instance.getEnum("State", {
  Default: "open",
  open: "open",
  closed: "closed",
}) ?? "open";
const showProfile = instance.getBoolean("Show Profile");

export default {
  example: figma.code`<Sidebar
  theme="${theme}"
  defaultOpen={${state === "open"}}
  showProfile={${showProfile}}
/>`,
  imports: ['import { Sidebar } from "@ads/ui-web"'],
  id: "ads-sidebar",
  metadata: { nestable: false },
};
