import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 3.33334V12.6667M3.33334 8.00001L8 12.6667L12.6667 8.00001\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 4.16666V15.8333M4.16667 9.99999L10 15.8333L15.8333 9.99999\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 5V19M5 12L12 19L19 12\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16 6.66666V25.3333M6.66666 16L16 25.3333L25.3333 16\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20 8.33334V31.6667M8.33334 20L20 31.6667L31.6667 20\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 10V38M10 24L24 38L38 24\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const ArrowDownIcon = createAdsIcon("ArrowDownIcon", svgBySize);
