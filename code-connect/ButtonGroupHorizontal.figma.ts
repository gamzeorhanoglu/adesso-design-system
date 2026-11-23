// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=224-401
// source=packages/ui-web/src/components/ButtonGroup/ButtonGroup.tsx
// component=ButtonGroup
import figma from "figma";

const instance = figma.selectedInstance;
const showSecondary = instance.getBoolean("Show Secondary-Button");
const secondary = instance.findInstance("Secondary-Button");
const primary = instance.findInstance("Primary-Button");
const secondaryCode = showSecondary && secondary.type === "INSTANCE" ? secondary.executeTemplate().example : undefined;
const primaryCode = primary.type === "INSTANCE" ? primary.executeTemplate().example : undefined;

export default {
  example: figma.code`<ButtonGroup aria-label="Button actions" orientation="horizontal">
  ${secondaryCode}
  ${primaryCode}
</ButtonGroup>`,
  imports: ['import { ButtonGroup } from "@ads/ui-web"'],
  id: "ads-button-group-horizontal",
  metadata: { nestable: true }
};
