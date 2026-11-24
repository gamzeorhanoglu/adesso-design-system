// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2497-239
// source=packages/ui-web/src/components/CarouselControl/CarouselControl.tsx
// component=CarouselControl
import figma from "figma";

export default {
  example: figma.code`<CarouselControl
  aria-label="Carousel navigation"
  count={4}
  defaultSelectedIndex={1}
/>`,
  imports: ['import { CarouselControl } from "@ads/ui-web"'],
  id: "ads-carousel-control",
  metadata: { nestable: true }
};
