// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2759-256
// source=packages/ui-web/src/components/Avatar/Avatar.tsx
// component=Avatar
import figma from "figma";

const instance = figma.selectedInstance;
const type = instance.getEnum("Type", { image: "image", initial: "initial" });
const size = instance.getEnum("Size", {
  large: "large",
  medium: "medium",
  small: "small"
});
const shape = instance.getEnum("Shape", { square: "square", circle: "circle" });
const initials = instance.getString("Initials");
const showBadge = instance.getBoolean("Show Badge");
const contentProp =
  type === "image"
    ? figma.code`src={avatarUrl}`
    : figma.code`initials="${initials}"`;

export default {
  example: figma.code`
    <Avatar
      type="${type}"
      size="${size}"
      shape="${shape}"
      aria-label="User avatar"
      ${contentProp}
      ${showBadge ? "showBadge" : ""}
    />
  `,
  imports: ['import { Avatar } from "@ads/ui-web"'],
  id: "ads-avatar",
  metadata: { nestable: true }
};
