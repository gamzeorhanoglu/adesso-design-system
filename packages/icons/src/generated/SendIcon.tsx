import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2135_2649)\">\n<path d=\"M14.6666 1.3335L7.33325 8.66683M7.33325 8.66683L1.33325 6.00016L14.6666 1.3335L9.99992 14.6668L7.33325 8.66683Z\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_2135_2649\">\n<rect width=\"16\" height=\"16\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2135_2651)\">\n<path d=\"M18.3334 1.6665L9.16675 10.8332M9.16675 10.8332L1.66675 7.49984L18.3334 1.6665L12.5001 18.3332L9.16675 10.8332Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_2135_2651\">\n<rect width=\"20\" height=\"20\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M22 2L11 13M11 13L2 9L22 2L15 22L11 13Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M29.3334 2.6665L14.6667 17.3332M14.6667 17.3332L2.66675 11.9998L29.3334 2.6665L20.0001 29.3332L14.6667 17.3332Z\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M36.6666 3.3335L18.3333 21.6668M18.3333 21.6668L3.33325 15.0002L36.6666 3.3335L24.9999 36.6668L18.3333 21.6668Z\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M44 4L22 26M22 26L4 18L44 4L30 44L22 26Z\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const SendIcon = createAdsIcon("SendIcon", svgBySize);
