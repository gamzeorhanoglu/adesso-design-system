// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5386-1707
// source=packages/ui-web/src/components/Calendar/Calendar.tsx
// component=Calendar
import figma from "figma";

const instance = figma.selectedInstance;
const period = instance.getEnum("Period", {
  Day: "day",
  month: "month"
}) ?? "day";

export default {
  example: figma.code`<Calendar period="${period}" />`,
  imports: ['import { Calendar } from "@ads/ui-web"'],
  id: "ads-calendar",
  metadata: {
    nestable: true,
    props: { period }
  }
};
