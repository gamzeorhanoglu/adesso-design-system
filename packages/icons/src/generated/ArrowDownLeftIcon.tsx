import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.3334 4.66666L4.66669 11.3333M4.66669 4.66666V11.3333H11.3334\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.1666 5.83334L5.83331 14.1667M5.83331 5.83334V14.1667H14.1666\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17 7L7 17M7 7V17H17\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M22.6667 9.33334L9.33337 22.6667M9.33337 9.33334V22.6667H22.6667\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M28.3333 11.6667L11.6666 28.3333M11.6666 11.6667V28.3333H28.3333\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M34 14L14 34M14 14V34H34\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const ArrowDownLeftIcon = createAdsIcon("ArrowDownLeftIcon", svgBySize);
