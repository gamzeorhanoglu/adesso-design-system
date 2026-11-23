// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2787-2475
// source=packages/ui-web/src/components/ProgressBar/ProgressBar.tsx
// component=ProgressBar
import figma from "figma";

const instance = figma.selectedInstance;
const valueText = instance.getString("Value");
const parsedValue = Number.parseFloat(valueText);
const value = Number.isFinite(parsedValue) ? parsedValue : 0;
const showLabel = instance.getBoolean("Show Label");
const showInfo = instance.getBoolean("Show Info");
const showValue = instance.getBoolean("Show Value");
const labelLayer = instance.findText("Label Text");
const label = labelLayer && labelLayer.type === "TEXT" ? labelLayer.textContent : "Progress";
const type = instance.getEnum("Type", {
  brand: "brand",
  neutral: "neutral",
  green: "green",
  red: "red",
  orange: "orange"
});
const size = instance.getEnum("Size", {
  small: "small",
  medium: "medium",
  large: "large"
});

export default {
  example: figma.code`
    <ProgressBar
      label="${label}"
      value={${value}}
      valueText="${valueText}"
      type="${type}"
      size="${size}"
      ${showLabel ? "showLabel" : "showLabel={false}"}
      ${showInfo ? "showInfo" : "showInfo={false}"}
      ${showValue ? "showValue" : "showValue={false}"}
    />
  `,
  imports: ['import { ProgressBar } from "@ads/ui-web"'],
  id: "ads-progress-bar",
  metadata: { nestable: true }
};
