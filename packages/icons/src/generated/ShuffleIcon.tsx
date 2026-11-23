import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 5.33333V2H10.6667M14 2L2.66669 13.3333M10.6667 14H14V10.6667M14 14L10 10M2.66669 2.66667L6.00002 6\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.5 6.66667V2.5H13.3333M17.5 2.5L3.33331 16.6667M13.3333 17.5H17.5V13.3333M17.5 17.5L12.5 12.5M3.33331 3.33333L7.49998 7.5\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21 8V3H16M21 3L4 20M16 21H21V16M21 21L15 15M4 4L9 9\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M28 10.6667V4H21.3334M28 4L5.33337 26.6667M21.3334 28H28V21.3333M28 28L20 20M5.33337 5.33333L12 12\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M35 13.3333V5H26.6666M35 5L6.66663 33.3333M26.6666 35H35V26.6667M35 35L25 25M6.66663 6.66667L15 15\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M42 16V6H32M42 6L8 40M32 42H42V32M42 42L30 30M8 8L18 18\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const ShuffleIcon = createAdsIcon("ShuffleIcon", svgBySize);
