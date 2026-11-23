import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.33337 2L12.6667 8L3.33337 14V2Z\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.16663 2.5L15.8333 10L4.16663 17.5V2.5Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 3L19 12L5 21V3Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.66663 4L25.3333 16L6.66663 28V4Z\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.33337 5L31.6667 20L8.33337 35V5Z\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 6L38 24L10 42V6Z\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const PlayIcon = createAdsIcon("PlayIcon", svgBySize);
