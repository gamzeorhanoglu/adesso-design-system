// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2332-1701
// source=packages/ui-web/src/components/CardContent/CardContent.tsx
// component=CardContent
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  disabled: "disabled"
}) ?? "default";
const device = instance.getEnum("Device", { desktop: "desktop", mobile: "mobile" }) ?? "desktop";
const title = instance.getString("Title");
const bodyText = instance.getString("Body text");
const showText = instance.getBoolean("Show Text");
const showImage = instance.getBoolean("Show Image");
const showButton = instance.getBoolean("Show Button");

export default {
  example: figma.code`<CardContent
  device="${device}"
  state="${state}"
  ${title ? figma.code`title="${title}"` : ""}
  ${bodyText ? figma.code`bodyText="${bodyText}"` : ""}
  ${showText ? "" : "showText={false}"}
  ${showImage ? "" : "showImage={false}"}
  ${showButton ? "" : "showButton={false}"}
/>`,
  imports: ['import { CardContent } from "@ads/ui-web"'],
  id: "ads-card-content",
  metadata: {
    nestable: true,
    props: {
      action: "ads-button-ghost",
      runtimeState: state === "hover" ? "hover-is-runtime-managed" : state
    }
  }
};
