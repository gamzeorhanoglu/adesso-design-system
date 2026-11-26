// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=3315-867
// source=packages/ui-web/src/components/CardNewsBlog/CardNewsBlog.tsx
// component=CardNewsBlog
import figma from "figma";

const instance = figma.selectedInstance;
const type = instance.getEnum("Type", { blog: "blog", news: "news" }) ?? "blog";
const state = instance.getEnum("State", { default: "default", hover: "hover" }) ?? "default";
const title = instance.getString("Title");
const showText = instance.getBoolean("Show Text");

export default {
  example: figma.code`<CardNewsBlog
  type="${type}"
  state="${state}"
  ${title ? figma.code`title="${title}"` : ""}
  ${showText ? "" : "showText={false}"}
/>`,
  imports: ['import { CardNewsBlog } from "@ads/ui-web"'],
  id: "ads-card-news-blog",
  metadata: {
    nestable: true,
    props: {
      type,
      runtimeState: state === "hover" ? "hover-is-runtime-managed" : state
    }
  }
};
