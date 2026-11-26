// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5561-427
// source=packages/ui-web/src/components/CardExternalLink/CardExternalLink.tsx
// component=CardExternalLink
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", { default: "default", hover: "hover" }) ?? "default";
const title = instance.getString("Title");
const showButton = instance.getBoolean("Show Button");

export default {
  example: figma.code`<CardExternalLink
  state="${state}"
  ${title ? figma.code`title="${title}"` : ""}
  ${showButton ? "" : "showButton={false}"}
/>`,
  imports: ['import { CardExternalLink } from "@ads/ui-web"'],
  id: "ads-card-external-link",
  metadata: {
    nestable: true,
    props: {
      action: "ads-button-secondary",
      runtimeState: state === "hover" ? "hover-is-runtime-managed" : state
    }
  }
};
