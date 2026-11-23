// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=225-476
// source=packages/ui-web/src/components/ButtonGroup/ButtonGroup.tsx
// component=ButtonGroup
import figma from "figma";

const instance = figma.selectedInstance;
const primary = instance.findInstance("Primary-Button");
const iconOnly = instance.findInstance("IconOnly-Button");
const primaryCode = primary.type === "INSTANCE" ? primary.executeTemplate().example : undefined;
const iconOnlyCode = iconOnly.type === "INSTANCE" ? iconOnly.executeTemplate().example : undefined;

export default {
  example: figma.code`<ButtonGroup aria-label="Button actions" orientation="horizontal">
  ${primaryCode}
  ${iconOnlyCode}
</ButtonGroup>`,
  imports: ['import { ButtonGroup } from "@ads/ui-web"'],
  id: "ads-button-group-icon-action",
  metadata: { nestable: true }
};
