import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.66669 6H13.3334M2.66669 10H13.3334M6.66669 2L5.33335 14M10.6667 2L9.33335 14\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.33331 7.5H16.6666M3.33331 12.5H16.6666M8.33331 2.5L6.66665 17.5M13.3333 2.5L11.6666 17.5\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4 9H20M4 15H20M10 3L8 21M16 3L14 21\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.33331 12H26.6666M5.33331 20H26.6666M13.3333 4L10.6666 28M21.3333 4L18.6666 28\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.66669 15H33.3334M6.66669 25H33.3334M16.6667 5L13.3334 35M26.6667 5L23.3334 35\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 18H40M8 30H40M20 6L16 42M32 6L28 42\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const HashIcon = createAdsIcon("HashIcon", svgBySize);
