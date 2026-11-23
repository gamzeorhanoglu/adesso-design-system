import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.66669 14V9.33333M2.66669 6.66667V2M8.00002 14V8M8.00002 5.33333V2M13.3334 14V10.6667M13.3334 8V2M0.666687 9.33333H4.66669M6.00002 5.33333H10M11.3334 10.6667H15.3334\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.33331 17.5V11.6667M3.33331 8.33333V2.5M9.99998 17.5V10M9.99998 6.66667V2.5M16.6666 17.5V13.3333M16.6666 10V2.5M0.833313 11.6667H5.83331M7.49998 6.66667H12.5M14.1666 13.3333H19.1666\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M1 14H7M9 8H15M17 16H23\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.33337 28V18.6667M5.33337 13.3333V4M16 28V16M16 10.6667V4M26.6667 28V21.3333M26.6667 16V4M1.33337 18.6667H9.33337M12 10.6667H20M22.6667 21.3333H30.6667\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.66663 35V23.3333M6.66663 16.6667V5M20 35V20M20 13.3333V5M33.3333 35V26.6667M33.3333 20V5M1.66663 23.3333H11.6666M15 13.3333H25M28.3333 26.6667H38.3333\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 42V28M8 20V6M24 42V24M24 16V6M40 42V32M40 24V6M2 28H14M18 16H30M34 32H46\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const SlidersIcon = createAdsIcon("SlidersIcon", svgBySize);
