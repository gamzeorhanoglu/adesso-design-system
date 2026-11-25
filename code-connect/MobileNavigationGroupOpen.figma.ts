import figma from "figma";

export default {
  example: figma.code`<NavigationGroup device="mobile" mobileView="top" defaultOpen />`,
  imports: ['import { NavigationGroup } from "@ads/ui-web"'],
  id: "ads-navigation-group-mobile-top-open",
  metadata: { nestable: false },
};
