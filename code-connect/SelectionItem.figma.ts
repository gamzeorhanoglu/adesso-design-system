// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=244-1236
// source=packages/ui-web/src/components/SelectionItem/SelectionItem.tsx
// component=SelectionItem
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Label Text");
const showDescription = instance.getBoolean("Show Description");
const descriptionLayer = instance.findText("Description");
const description =
  descriptionLayer && descriptionLayer.type === "TEXT"
    ? descriptionLayer.textContent
    : "Description";
const selectionControl = instance.getInstanceSwap("Selection Type");
const selectionType =
  selectionControl &&
  selectionControl.type === "INSTANCE" &&
  selectionControl.codeConnectId() === "ads-checkbox"
    ? "checkbox"
    : "radio";

export default {
  example: figma.code`
    <SelectionItem
      type="${selectionType}"
      label="${label}"
      ${showDescription ? figma.code`description="${description}"` : ""}
      ${selectionType === "radio" ? figma.code`name="selection-group"` : ""}
    />
  `,
  imports: ['import { SelectionItem } from "@ads/ui-web"'],
  id: "ads-selection-item",
  metadata: { nestable: true }
};
