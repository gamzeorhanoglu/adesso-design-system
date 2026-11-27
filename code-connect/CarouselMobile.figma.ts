// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2526-837
// source=packages/ui-web/src/components/Carousel/Carousel.tsx
// component=Carousel
import figma from "figma";

export default {
  example: figma.code`<Carousel device="mobile" />`,
  imports: ['import { Carousel } from "@ads/ui-web"'],
  id: "ads-carousel-mobile",
  metadata: {
    nestable: false,
    props: {
      control: "ads-carousel-control",
      action: "ads-button-secondary"
    }
  }
};
