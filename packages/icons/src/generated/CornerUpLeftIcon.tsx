import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6 2.66663L2.66666 5.99996L6 9.33329M2.66666 5.99996H10.6667C11.3739 5.99996 12.0522 6.28091 12.5523 6.78101C13.0524 7.2811 13.3333 7.95938 13.3333 8.66663V13.3333\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.49999 3.33337L3.33333 7.50004L7.49999 11.6667M3.33333 7.50004H13.3333C14.2174 7.50004 15.0652 7.85123 15.6903 8.47635C16.3155 9.10147 16.6667 9.94932 16.6667 10.8334V16.6667\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 4L4 9L9 14M4 9H16C17.0609 9 18.0783 9.42143 18.8284 10.1716C19.5786 10.9217 20 11.9391 20 13V20\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 5.33337L5.33334 12L12 18.6667M5.33334 12H21.3333C22.7478 12 24.1044 12.5619 25.1046 13.5621C26.1048 14.5623 26.6667 15.9189 26.6667 17.3334V26.6667\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 6.66663L6.66666 15L15 23.3333M6.66666 15H26.6667C28.4348 15 30.1305 15.7023 31.3807 16.9526C32.6309 18.2028 33.3333 19.8985 33.3333 21.6666V33.3333\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18 8L8 18L18 28M8 18H32C34.1217 18 36.1566 18.8429 37.6569 20.3431C39.1571 21.8434 40 23.8783 40 26V40\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const CornerUpLeftIcon = createAdsIcon("CornerUpLeftIcon", svgBySize);
