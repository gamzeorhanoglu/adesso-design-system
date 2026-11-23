import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.99996 14.6668C7.99996 14.6668 13.3333 12.0002 13.3333 8.00016V3.3335L7.99996 1.3335L2.66663 3.3335V8.00016C2.66663 12.0002 7.99996 14.6668 7.99996 14.6668Z\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 18.3332C10 18.3332 16.6667 14.9998 16.6667 9.99984V4.1665L10 1.6665L3.33337 4.1665V9.99984C3.33337 14.9998 10 18.3332 10 18.3332Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16 29.3332C16 29.3332 26.6667 23.9998 26.6667 15.9998V6.6665L16 2.6665L5.33337 6.6665V15.9998C5.33337 23.9998 16 29.3332 16 29.3332Z\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20 36.6668C20 36.6668 33.3333 30.0002 33.3333 20.0002V8.3335L20 3.3335L6.66663 8.3335V20.0002C6.66663 30.0002 20 36.6668 20 36.6668Z\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 44C24 44 40 36 40 24V10L24 4L8 10V24C8 36 24 44 24 44Z\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const ShieldIcon = createAdsIcon("ShieldIcon", svgBySize);
