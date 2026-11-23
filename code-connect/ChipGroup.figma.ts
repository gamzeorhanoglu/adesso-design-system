// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5112-2972
// source=packages/ui-web/src/components/ChipGroup/ChipGroup.tsx
// component=ChipGroup
import figma from "figma";

const instance = figma.selectedInstance;
const chips = instance.findConnectedInstances((node) => node.codeConnectId() === "ads-chip");
const chip1 = chips[0]?.executeTemplate().example;
const chip2 = chips[1]?.executeTemplate().example;
const chip3 = chips[2]?.executeTemplate().example;
const chip4 = chips[3]?.executeTemplate().example;
const chip5 = chips[4]?.executeTemplate().example;

export default {
  example: figma.code`<ChipGroup aria-label="Filters">
  ${chip1}
  ${chip2}
  ${chip3}
  ${chip4}
  ${chip5}
</ChipGroup>`,
  imports: ['import { ChipGroup } from "@ads/ui-web"'],
  id: "ads-chip-group",
  metadata: { nestable: true }
};
