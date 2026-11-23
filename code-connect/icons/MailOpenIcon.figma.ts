// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=5384-630
// source=packages/icons/src/generated/MailOpenIcon.tsx
// component=MailOpenIcon
import figma from "figma";

const instance = figma.selectedInstance;
const size = instance.getEnum("size", {
  "xs": "xs",
  "sm": "sm",
  "md": "md",
  "lg": "lg",
  "xl": "xl",
  "2xl": "2xl"
});

export default {
  example: figma.code`<MailOpenIcon size="${size}" />`,
  imports: ['import { MailOpenIcon } from "@ads/icons"'],
  id: "ads-icon-mail-open",
  metadata: { nestable: true }
};
