// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2181-8155
// source=packages/ui-web/src/components/CalendarItem/CalendarItem.tsx
// component=CalendarItem
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Number");
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  selected: "selected",
  hidden: "hidden",
  disabled: "disabled",
  range: "range"
}) ?? "default";

export default {
  example: figma.code`<CalendarItem
  aria-label="Day ${label}"
  label="${label}"
  ${state === "selected" ? "selected" : ""}
  ${state === "range" ? "inRange" : ""}
  ${state === "disabled" ? "disabled" : ""}
  ${state === "hidden" ? "hidden" : ""}
/>`,
  imports: ['import { CalendarItem } from "@ads/ui-web"'],
  id: "ads-calendar-item",
  metadata: {
    nestable: true,
    props: {
      runtimeState: state === "hover" ? "hover-is-runtime-managed" : state
    }
  }
};
