// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2739-180
// source=packages/ui-web/src/components/NotificationMessage/NotificationMessage.tsx
// component=NotificationMessage
import figma from "figma";

const instance = figma.selectedInstance;
const device = instance.getEnum("Device", { desktop: "desktop", mobile: "mobile" }) ?? "desktop";
const state = instance.getEnum("State", { default: "default", hover: "hover" }) ?? "default";
const showDescription = instance.getBoolean("Show Description");

export default {
  example: figma.code`<NotificationMessage
  device="${device}"
  state="${state}"
  ${showDescription ? "" : "showDescription={false}"}
/>`,
  imports: ['import { NotificationMessage } from "@ads/ui-web"'],
  id: "ads-notification-message",
  metadata: {
    nestable: true,
    props: {
      device,
      action: "ads-button-ghost",
      runtimeState: state === "hover" ? "hover-is-runtime-managed" : state
    }
  }
};
