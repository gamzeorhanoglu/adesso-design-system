// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2332-3164
// source=packages/ui-web/src/components/Breadcrumb/Breadcrumb.tsx
// component=Breadcrumb
import figma from "figma";

const instance = figma.selectedInstance;
const items = instance.findConnectedInstances(
  (node) => node.codeConnectId() === "ads-breadcrumb-item"
);
const item1 = items[0]?.executeTemplate().example;
const item2 = items[1]?.executeTemplate().example;
const item3 = items[2]?.executeTemplate().example;
const item4 = items[3]?.executeTemplate().example;

export default {
  example: figma.code`<Breadcrumb aria-label="Page hierarchy">
  ${item1}
  ${item2}
  ${item3}
  ${item4}
</Breadcrumb>`,
  imports: ['import { Breadcrumb } from "@ads/ui-web"'],
  id: "ads-breadcrumb",
  metadata: { nestable: true }
};
