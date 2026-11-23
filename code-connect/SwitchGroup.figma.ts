// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=246-798
// source=packages/ui-web/src/components/SwitchGroup/SwitchGroup.tsx
// component=SwitchGroup
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Label Text");
const showDescription = instance.getBoolean("Show Description");
const descriptionLayer = instance.findText("Description");
const description =
  descriptionLayer && descriptionLayer.type === "TEXT"
    ? descriptionLayer.textContent
    : "Description";

export default {
  example: figma.code`
    <SwitchGroup
      label="${label}"
      ${showDescription ? figma.code`description="${description}"` : ""}
      defaultChecked
    />
  `,
  imports: ['import { SwitchGroup } from "@ads/ui-web"'],
  id: "ads-switch-group",
  metadata: { nestable: true }
};
