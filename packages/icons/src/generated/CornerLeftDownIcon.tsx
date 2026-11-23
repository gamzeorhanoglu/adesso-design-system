import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.66669 9.99996L6.00002 13.3333L9.33335 9.99996M6.00002 13.3333V5.33329C6.00002 4.62605 6.28097 3.94777 6.78107 3.44767C7.28117 2.94758 7.95944 2.66663 8.66669 2.66663H13.3334\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.33331 12.5L7.49998 16.6667L11.6666 12.5M7.49998 16.6667V6.66671C7.49998 5.78265 7.85117 4.93481 8.47629 4.30968C9.10141 3.68456 9.94926 3.33337 10.8333 3.33337H16.6666\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4 15L9 20L14 15M9 20V8C9 6.93913 9.42143 5.92172 10.1716 5.17157C10.9217 4.42143 11.9391 4 13 4H20\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.33337 20L12 26.6667L18.6667 20M12 26.6667V10.6667C12 9.25222 12.5619 7.89567 13.5621 6.89547C14.5623 5.89528 15.9189 5.33337 17.3334 5.33337H26.6667\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.66663 25L15 33.3333L23.3333 25M15 33.3333V13.3333C15 11.5652 15.7023 9.86949 16.9526 8.61925C18.2028 7.369 19.8985 6.66663 21.6666 6.66663H33.3333\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 30L18 40L28 30M18 40V16C18 13.8783 18.8429 11.8434 20.3431 10.3431C21.8434 8.84285 23.8783 8 26 8H40\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const CornerLeftDownIcon = createAdsIcon("CornerLeftDownIcon", svgBySize);
