import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 2.66663L13.3334 5.99996L10 9.33329M13.3334 5.99996H5.33335C4.62611 5.99996 3.94783 6.28091 3.44774 6.78101C2.94764 7.2811 2.66669 7.95938 2.66669 8.66663V13.3333\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.5 3.33337L16.6666 7.50004L12.5 11.6667M16.6666 7.50004H6.66665C5.78259 7.50004 4.93474 7.85123 4.30962 8.47635C3.6845 9.10147 3.33331 9.94932 3.33331 10.8334V16.6667\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 4L20 9L15 14M20 9H8C6.93913 9 5.92172 9.42143 5.17157 10.1716C4.42143 10.9217 4 11.9391 4 13V20\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20 5.33337L26.6666 12L20 18.6667M26.6666 12H10.6666C9.25216 12 7.8956 12.5619 6.89541 13.5621C5.89522 14.5623 5.33331 15.9189 5.33331 17.3334V26.6667\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M25 6.66663L33.3334 15L25 23.3333M33.3334 15H13.3334C11.5652 15 9.86955 15.7023 8.61931 16.9526C7.36907 18.2028 6.66669 19.8985 6.66669 21.6666V33.3333\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M30 8L40 18L30 28M40 18H16C13.8783 18 11.8434 18.8429 10.3431 20.3431C8.84285 21.8434 8 23.8783 8 26V40\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const CornerUpRightIcon = createAdsIcon("CornerUpRightIcon", svgBySize);
