import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.66663 5.99996L5.99996 2.66663L9.33329 5.99996M5.99996 2.66663V10.6666C5.99996 11.3739 6.28091 12.0521 6.78101 12.5522C7.2811 13.0523 7.95938 13.3333 8.66663 13.3333H13.3333\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.33337 7.50004L7.50004 3.33337L11.6667 7.50004M7.50004 3.33337V13.3334C7.50004 14.2174 7.85123 15.0653 8.47635 15.6904C9.10147 16.3155 9.94932 16.6667 10.8334 16.6667H16.6667\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4 9L9 4L14 9M9 4V16C9 17.0609 9.42143 18.0783 10.1716 18.8284C10.9217 19.5786 11.9391 20 13 20H20\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.33337 12L12 5.33337L18.6667 12M12 5.33337V21.3334C12 22.7479 12.5619 24.1044 13.5621 25.1046C14.5623 26.1048 15.9189 26.6667 17.3334 26.6667H26.6667\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.66663 15L15 6.66663L23.3333 15M15 6.66663V26.6666C15 28.4347 15.7023 30.1304 16.9526 31.3807C18.2028 32.6309 19.8985 33.3333 21.6666 33.3333H33.3333\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 18L18 8L28 18M18 8V32C18 34.1217 18.8429 36.1566 20.3431 37.6569C21.8434 39.1571 23.8783 40 26 40H40\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const CornerLeftUpIcon = createAdsIcon("CornerLeftUpIcon", svgBySize);
