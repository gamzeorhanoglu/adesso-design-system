// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5374-4141
// source=packages/ui-web/src/components/NotificationGroup/NotificationGroup.tsx
// component=NotificationGroup
import figma from "figma";

const instance = figma.selectedInstance;
const showTab = instance.getBoolean("Show Tab");
const showUnreadInformation = instance.getBoolean("Show Unread Information");

export default {
  example: figma.code`<NotificationGroup
  ${showTab ? "" : "showTab={false}"}
  ${showUnreadInformation ? "" : "showUnreadInformation={false}"}
>
  <NotificationList />
</NotificationGroup>`,
  imports: ['import { NotificationGroup, NotificationList } from "@ads/ui-web"'],
  id: "ads-notification-group",
  metadata: {
    nestable: false,
    props: {
      tabs: "ads-tab-group-primary",
      items: "ads-notification-list"
    }
  }
};
