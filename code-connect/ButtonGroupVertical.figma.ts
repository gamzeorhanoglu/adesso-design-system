// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=225-477
// source=packages/ui-web/src/components/ButtonGroup/ButtonGroup.tsx
// component=ButtonGroup
import figma from "figma";

const instance = figma.selectedInstance;
const showSecondary = instance.getBoolean("Show Secondary-Button");
const showGhost = instance.getBoolean("Show Ghost-Button");
const primary = instance.findInstance("Primary-Button");
const secondary = instance.findInstance("Secondary-Button");
const ghost = instance.findInstance("Ghost-Button");
const primaryCode = primary.type === "INSTANCE" ? primary.executeTemplate().example : undefined;
const secondaryCode = showSecondary && secondary.type === "INSTANCE" ? secondary.executeTemplate().example : undefined;
const ghostCode = showGhost && ghost.type === "INSTANCE" ? ghost.executeTemplate().example : undefined;

export default {
  example: figma.code`<ButtonGroup aria-label="Button actions" orientation="vertical">
  ${primaryCode}
  ${secondaryCode}
  ${ghostCode}
</ButtonGroup>`,
  imports: ['import { ButtonGroup } from "@ads/ui-web"'],
  id: "ads-button-group-vertical",
  metadata: { nestable: true }
};
