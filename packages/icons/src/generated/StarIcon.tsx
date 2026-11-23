import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.99998 1.3335L10.06 5.50683L14.6666 6.18016L11.3333 9.42683L12.12 14.0135L7.99998 11.8468L3.87998 14.0135L4.66665 9.42683L1.33331 6.18016L5.93998 5.50683L7.99998 1.3335Z\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 1.6665L12.575 6.88317L18.3334 7.72484L14.1667 11.7832L15.15 17.5165L10 14.8082L4.85002 17.5165L5.83335 11.7832L1.66669 7.72484L7.42502 6.88317L10 1.6665Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16 2.6665L20.12 11.0132L29.3334 12.3598L22.6667 18.8532L24.24 28.0265L16 23.6932L7.76002 28.0265L9.33335 18.8532L2.66669 12.3598L11.88 11.0132L16 2.6665Z\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20 3.3335L25.15 13.7668L36.6666 15.4502L28.3333 23.5668L30.3 35.0335L20 29.6168L9.69998 35.0335L11.6666 23.5668L3.33331 15.4502L14.85 13.7668L20 3.3335Z\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 4L30.18 16.52L44 18.54L34 28.28L36.36 42.04L24 35.54L11.64 42.04L14 28.28L4 18.54L17.82 16.52L24 4Z\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const StarIcon = createAdsIcon("StarIcon", svgBySize);
