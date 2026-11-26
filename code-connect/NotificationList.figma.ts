// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5371-1513
// source=packages/ui-web/src/components/NotificationList/NotificationList.tsx
// component=NotificationList
import figma from "figma";

const instance = figma.selectedInstance;
const device = instance.getEnum("Device", { desktop: "desktop", mobile: "mobile" }) ?? "desktop";
const state =
  instance.getEnum("State", {
    default: "default",
    open: "open",
    read: "read",
    "read-open": "read-open"
  }) ?? "default";
const showIcon = instance.getBoolean("Show Icon");
const showDescription = instance.getBoolean("Show Description");
const showButton = instance.getBoolean("Show Button");
const read = state === "read" || state === "read-open";
const open = state === "open" || state === "read-open";

export default {
  example: figma.code`<NotificationList
  device="${device}"
  ${read ? "read" : ""}
  ${open ? "defaultOpen" : ""}
  ${showIcon ? "" : "showIcon={false}"}
  ${showDescription ? "" : "showDescription={false}"}
  ${showButton ? "" : "showButton={false}"}
/>`,
  imports: ['import { NotificationList } from "@ads/ui-web"'],
  id: "ads-notification-list",
  metadata: {
    nestable: true,
    props: {
      device,
      state,
      action: "ads-button-ghost"
    }
  }
};
