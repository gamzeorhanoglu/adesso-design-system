import figma from "figma";

export default {
  example: figma.code`<Pagination pageCount={8} />`,
  imports: ['import { Pagination } from "@ads/ui-web"'],
  id: "ads-pagination",
  metadata: { nestable: false },
};
