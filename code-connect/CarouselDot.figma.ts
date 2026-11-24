// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2496-407
// source=packages/ui-web/src/components/CarouselDot/CarouselDot.tsx
// component=CarouselDot
import figma from "figma";

const instance = figma.selectedInstance;
const state = instance.getEnum("State", {
  default: "default",
  hover: "hover",
  selected: "selected"
}) ?? "default";

export default {
  example: figma.code`<CarouselDot
  aria-label="Slide position"
  ${state === "selected" ? "selected" : ""}
/>`,
  imports: ['import { CarouselDot } from "@ads/ui-web"'],
  id: "ads-carousel-dot",
  metadata: {
    nestable: true,
    props: { runtimeState: state === "hover" ? "hover-is-runtime-managed" : state }
  }
};
