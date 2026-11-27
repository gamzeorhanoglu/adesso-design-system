// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2714-49
// source=packages/ui-web/src/components/ToastMessage/ToastMessage.tsx
// component=ToastMessage
import figma from "figma";

const instance = figma.selectedInstance;
const type =
  instance.getEnum("Type", { success: "success", warning: "warning", error: "error", info: "info" }) ?? "success";
const device = instance.getEnum("Device", { desktop: "desktop", mobile: "mobile" }) ?? "desktop";
const showDescription = instance.getBoolean("Show Description");
const showButton = instance.getBoolean("Show Button");

export default {
  example: figma.code`<ToastMessage
  type="${type}"
  device="${device}"
  ${showDescription ? "" : "showDescription={false}"}
  ${showButton ? "" : "showButton={false}"}
/>`,
  imports: ['import { ToastMessage } from "@ads/ui-web"'],
  id: "ads-toast-message",
  metadata: {
    nestable: true,
    props: {
      type,
      device,
      action: "ads-button-ghost"
    }
  }
};
