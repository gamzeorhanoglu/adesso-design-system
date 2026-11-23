// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2768-2266
// source=packages/ui-web/src/components/Tag/Tag.tsx
// component=Tag
import figma from "figma";

const instance = figma.selectedInstance;
const color = instance.getEnum("Color", {
  brand: "brand",
  neutral: "neutral",
  green: "green",
  orange: "orange",
  red: "red"
});
const size = instance.getEnum("size", {
  large: "large",
  medium: "medium",
  small: "small"
});
const showIcon = instance.getBoolean("Show Icon");
const showText = instance.getBoolean("Show Text");
const textLayer = instance.findText("Lorem Ipsum");
const text = textLayer && textLayer.type === "TEXT" ? textLayer.textContent : "Tag";
const iconInstance = showIcon
  ? instance.getInstanceSwap(
      size === "large" ? "Icon Large" : size === "small" ? "Icon Small" : "Icon Medium"
    )
  : null;
const iconCode =
  iconInstance && iconInstance.type === "INSTANCE"
    ? iconInstance.executeTemplate().example
    : undefined;

export default {
  example: figma.code`
    <Tag
      variant="soft"
      color="${color}"
      size="${size}"
      ${iconCode ? figma.code`icon={${iconCode}}` : ""}
      ${!showText ? figma.code`aria-label="Tag"` : ""}
    >${showText ? text : ""}</Tag>
  `,
  imports: ['import { Tag } from "@ads/ui-web"'],
  id: "ads-tag-soft",
  metadata: { nestable: true }
};
