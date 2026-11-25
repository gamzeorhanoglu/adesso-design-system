import figma from "figma";

export default {
  example: figma.code`<PaginationItem page={1} />`,
  imports: ['import { PaginationItem } from "@ads/ui-web"'],
  id: "ads-pagination-item",
  metadata: { nestable: true },
};
