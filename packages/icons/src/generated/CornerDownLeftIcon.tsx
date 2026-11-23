import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6 13.3333L2.66666 9.99996L6 6.66663M2.66666 9.99996H10.6667C11.3739 9.99996 12.0522 9.71901 12.5523 9.21891C13.0524 8.71881 13.3333 8.04054 13.3333 7.33329V2.66663\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.49999 16.6667L3.33333 12.5L7.49999 8.33337M3.33333 12.5H13.3333C14.2174 12.5 15.0652 12.1489 15.6903 11.5237C16.3155 10.8986 16.6667 10.0508 16.6667 9.16671V3.33337\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 20L4 15L9 10M4 15H16C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11V4\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 26.6667L5.33334 20L12 13.3334M5.33334 20H21.3333C22.7478 20 24.1044 19.4381 25.1046 18.4379C26.1048 17.4378 26.6667 16.0812 26.6667 14.6667V5.33337\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 33.3333L6.66666 25L15 16.6666M6.66666 25H26.6667C28.4348 25 30.1305 24.2976 31.3807 23.0473C32.6309 21.7971 33.3333 20.1014 33.3333 18.3333V6.66663\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18 40L8 30L18 20M8 30H32C34.1217 30 36.1566 29.1571 37.6569 27.6569C39.1571 26.1566 40 24.1217 40 22V8\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const CornerDownLeftIcon = createAdsIcon("CornerDownLeftIcon", svgBySize);
