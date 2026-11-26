// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2322-1675
// source=packages/ui-web/src/components/Dialog/Dialog.tsx
// component=Dialog
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", { default: "default", error: "error" }) ?? "default";
const type = instance.getEnum("Type", { "pop-up": "pop-up", sticky: "sticky" }) ?? "pop-up";
const showIcon = instance.getBoolean("Show Icon");

export default {
  example: figma.code`<Dialog device="desktop" state="${state}" type="${type}" ${showIcon ? "" : figma.code`showIcon={false}`} />`,
  imports: ['import { Dialog } from "@ads/ui-web"'],
  id: "ads-dialog-desktop",
  metadata: { nestable: true, props: { runtimeState: state, type } },
};
