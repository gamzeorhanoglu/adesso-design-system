import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.3333 9.99996L9.99996 13.3333L6.66663 9.99996M9.99996 13.3333V5.33329C9.99996 4.62605 9.71901 3.94777 9.21891 3.44767C8.71881 2.94758 8.04054 2.66663 7.33329 2.66663H2.66663\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.6667 12.5L12.5 16.6667L8.33337 12.5M12.5 16.6667V6.66671C12.5 5.78265 12.1489 4.93481 11.5237 4.30968C10.8986 3.68456 10.0508 3.33337 9.16671 3.33337H3.33337\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20 15L15 20L10 15M15 20V8C15 6.93913 14.5786 5.92172 13.8284 5.17157C13.0783 4.42143 12.0609 4 11 4H4\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M26.6667 20L20 26.6667L13.3334 20M20 26.6667V10.6667C20 9.25222 19.4381 7.89567 18.4379 6.89547C17.4378 5.89528 16.0812 5.33337 14.6667 5.33337H5.33337\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M33.3333 25L25 33.3333L16.6666 25M25 33.3333V13.3333C25 11.5652 24.2976 9.86949 23.0473 8.61925C21.7971 7.369 20.1014 6.66663 18.3333 6.66663H6.66663\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M40 30L30 40L20 30M30 40V16C30 13.8783 29.1571 11.8434 27.6569 10.3431C26.1566 8.84285 24.1217 8 22 8H8\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const CornerRightDownIcon = createAdsIcon("CornerRightDownIcon", svgBySize);
