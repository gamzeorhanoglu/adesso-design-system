// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2181-5614
// source=packages/ui-web/src/components/Flag/Flag.tsx
// component=Flag
import figma from "figma";

const instance = figma.selectedInstance;
const country = instance.getEnum("Country", {
  "Saudi Arabia": "saudi-arabia",
  Turkey: "turkey",
  USA: "usa",
  Spain: "spain",
  Germany: "germany",
  Country10: "turkey",
  Country9: "saudi-arabia",
  Country8: "usa",
  Country7: "spain",
  Country6: "germany"
});
const size = instance.getEnum("Size", {
  lg: "lg",
  md: "md"
});

export default {
  example: figma.code`<Flag country="${country}" size="${size}" />`,
  imports: ['import { Flag } from "@ads/ui-web"'],
  id: "ads-flag",
  metadata: { nestable: true }
};
