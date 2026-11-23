// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=244-1325
// source=packages/ui-web/src/components/SelectionGroup/SelectionGroup.tsx
// component=SelectionGroup
import figma from "figma";

const instance = figma.selectedInstance;
const items = instance.findConnectedInstances(
  (node) => node.codeConnectId() === "ads-selection-item"
);
const item1 = items[0]?.executeTemplate().example;
const item2 = items[1]?.executeTemplate().example;
const item3 = items[2]?.executeTemplate().example;
const item4 = items[3]?.executeTemplate().example;
const item5 = items[4]?.executeTemplate().example;

export default {
  example: figma.code`
    <SelectionGroup aria-label="Selection group">
      ${item1}
      ${item2}
      ${item3}
      ${item4}
      ${item5}
    </SelectionGroup>
  `,
  imports: ['import { SelectionGroup } from "@ads/ui-web"'],
  id: "ads-selection-group",
  metadata: { nestable: true }
};
