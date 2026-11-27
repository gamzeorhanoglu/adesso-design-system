// url=https://www.figma.com/design/amS8gweXJwZXhCNWE8tB1o/ADS?node-id=2497-1153
// source=packages/ui-web/src/components/Carousel/Carousel.tsx
// component=Carousel
import figma from "figma";

const instance = figma.selectedInstance;
const showButton = instance.getBoolean("Show Button");

export default {
  example: figma.code`<Carousel
  device="desktop"
  ${showButton ? "" : "showButton={false}"}
/>`,
  imports: ['import { Carousel } from "@ads/ui-web"'],
  id: "ads-carousel",
  metadata: {
    nestable: false,
    props: {
      control: "ads-carousel-control",
      action: "ads-button-secondary"
    }
  }
};
