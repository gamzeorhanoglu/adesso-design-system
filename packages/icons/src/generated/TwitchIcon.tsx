import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.33333 7.3335V4.66683M10.6667 7.3335V4.66683M14 1.3335H2V12.0002H5.33333V14.6668L8 12.0002H11.3333L14 9.3335V1.3335Z\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.16667 9.1665V5.83317M13.3333 9.1665V5.83317M17.5 1.6665H2.5V14.9998H6.66667V18.3332L10 14.9998H14.1667L17.5 11.6665V1.6665Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11 11V7M16 11V7M21 2H3V18H8V22L12 18H17L21 14V2Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.6667 14.6665V9.33317M21.3333 14.6665V9.33317M28 2.6665H4V23.9998H10.6667V29.3332L16 23.9998H22.6667L28 18.6665V2.6665Z\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18.3333 18.3335V11.6668M26.6667 18.3335V11.6668M35 3.3335H5V30.0002H13.3333V36.6668L20 30.0002H28.3333L35 23.3335V3.3335Z\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M22 22V14M32 22V14M42 4H6V36H16V44L24 36H34L42 28V4Z\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const TwitchIcon = createAdsIcon("TwitchIcon", svgBySize);
