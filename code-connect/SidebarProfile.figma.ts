// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5301-2928
// source=packages/ui-web/src/components/SidebarProfile/SidebarProfile.tsx
// component=SidebarProfile
import figma from "figma";

const instance = figma.selectedInstance;
const theme = instance.getEnum("Theme", { light: "light", dark: "dark" }) ?? "light";
const showIdentity = instance.getBoolean("Show Identity");
const nameLayer = instance.findText("John Doe");
const roleLayer = instance.findText("Product Designer");
const name = nameLayer.type === "TEXT" ? nameLayer.textContent : "John Doe";
const role = roleLayer.type === "TEXT" ? roleLayer.textContent : "Product Designer";

export default {
  example: figma.code`<SidebarProfile
  theme="${theme}"
  name="${name}"
  role="${role}"
  ${showIdentity ? "" : figma.code`showIdentity={false}`}
/>`,
  imports: ['import { SidebarProfile } from "@ads/ui-web"'],
  id: "ads-sidebar-profile",
  metadata: { nestable: true },
};
