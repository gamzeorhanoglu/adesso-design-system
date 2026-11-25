import figma from "figma";

const instance = figma.selectedInstance;
const device = instance.getEnum("Device", {
  desktop: "desktop",
  mobile: "mobile",
}) ?? "desktop";
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  selected: "selected",
}) ?? "default";
const showIcon = instance.getBoolean("Show Icon");
const labelLayer = instance.findText("Lorem Ipsum");
const label = labelLayer.type === "TEXT" ? labelLayer.textContent : "Lorem Ipsum";

export default {
  example: figma.code`<Accordion
  title="${label}"
  device="${device}"
  ${state === "selected" ? "defaultOpen" : ""}
  ${state === "hover" ? 'data-preview-state="hover"' : ""}
  ${showIcon ? "" : "showIcon={false}"}
/>`,
  imports: ['import { Accordion } from "@ads/ui-web"'],
  id: "ads-accordion",
  metadata: { nestable: true },
};
