import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 13.3333L13.3334 9.99996L10 6.66663M13.3334 9.99996H5.33335C4.62611 9.99996 3.94783 9.71901 3.44774 9.21891C2.94764 8.71881 2.66669 8.04054 2.66669 7.33329V2.66663\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.5 16.6667L16.6666 12.5L12.5 8.33337M16.6666 12.5H6.66665C5.78259 12.5 4.93474 12.1489 4.30962 11.5237C3.6845 10.8986 3.33331 10.0508 3.33331 9.16671V3.33337\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 20L20 15L15 10M20 15H8C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11V4\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20 26.6667L26.6666 20L20 13.3334M26.6666 20H10.6666C9.25216 20 7.8956 19.4381 6.89541 18.4379C5.89522 17.4378 5.33331 16.0812 5.33331 14.6667V5.33337\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M25 33.3333L33.3334 25L25 16.6666M33.3334 25H13.3334C11.5652 25 9.86955 24.2976 8.61931 23.0473C7.36907 21.7971 6.66669 20.1014 6.66669 18.3333V6.66663\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M30 40L40 30L30 20M40 30H16C13.8783 30 11.8434 29.1571 10.3431 27.6569C8.84285 26.1566 8 24.1217 8 22V8\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const CornerDownRightIcon = createAdsIcon("CornerDownRightIcon", svgBySize);
