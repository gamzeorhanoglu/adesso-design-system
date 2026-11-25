// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2334-5664
// source=packages/ui-web/src/components/TopNavigation/TopNavigation.tsx
// component=TopNavigation
import figma from "figma";

const instance = figma.selectedInstance;
const navigationItems = instance.findConnectedInstances(
  (node) => node.codeConnectId() === "ads-navigation-item"
);
const firstItem = navigationItems[0]?.executeTemplate().example;
const secondItem = navigationItems[1]?.executeTemplate().example;
const thirdItem = navigationItems[2]?.executeTemplate().example;

export default {
  example: figma.code`<TopNavigation device="desktop">
  ${firstItem}
  ${secondItem}
  ${thirdItem}
</TopNavigation>`,
  imports: ['import { TopNavigation } from "@ads/ui-web"'],
  id: "ads-top-navigation-desktop",
  metadata: { nestable: false }
};
