import figma from "figma";

export default {
  example: figma.code`<PaginationControls direction="previous" />`,
  imports: ['import { PaginationControls } from "@ads/ui-web"'],
  id: "ads-pagination-controls",
  metadata: { nestable: true },
};
