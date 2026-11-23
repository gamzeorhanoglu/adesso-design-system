// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2896-555
// source=packages/ui-web/src/components/Tooltip/Tooltip.tsx
// component=Tooltip
import figma from "figma";

const instance = figma.selectedInstance;
const title = instance.getString("Title");
const bodyText = instance.getString("Body Text");
const showBodyText = instance.getBoolean("Show Body Text");
const placement = instance.getEnum("Placement", {
  top: "top",
  bottom: "bottom",
  right: "right",
  left: "left"
});
const color = instance.getEnum("Color", { light: "light", dark: "dark" });

export default {
  example: figma.code`
    <Tooltip
      title="${title}"
      placement="${placement}"
      color="${color}"
      ${showBodyText ? figma.code`bodyText="${bodyText}"` : ""}
    />
  `,
  imports: ['import { Tooltip } from "@ads/ui-web"'],
  id: "ads-tooltip",
  metadata: { nestable: true }
};
