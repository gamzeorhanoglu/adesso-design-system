// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5423-3401
// source=packages/ui-web/src/components/CardKpi/CardKpi.tsx
// component=CardKpi
import figma from "figma";

const instance = figma.selectedInstance;
const amount = instance.getEnum("Amount", { single: "single", multiple: "multiple" }) ?? "single";
const showMore = instance.getBoolean("Show More");
const showIncrease = instance.getBoolean("Show Increase");
const showDecrease = instance.getBoolean("Show Decrease");

export default {
  example: figma.code`<CardKpi
  amount="${amount}"
  ${showMore ? "" : "showMore={false}"}
  ${showIncrease ? "" : "showIncrease={false}"}
  ${showDecrease ? "" : "showDecrease={false}"}
/>`,
  imports: ['import { CardKpi } from "@ads/ui-web"'],
  id: "ads-card-kpi",
  metadata: {
    nestable: true,
    props: {
      amount
    }
  }
};
