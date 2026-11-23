import { createAdsIcon } from "../createAdsIcon";

const svgBySize = {
  "xs": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.3334 6.00016L11.3334 10.0002M11.3334 6.00016L15.3334 10.0002M7.33337 3.3335L4.00004 6.00016H1.33337V10.0002H4.00004L7.33337 12.6668V3.3335Z\" stroke=\"#181614\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "sm": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.1666 7.49984L14.1666 12.4998M14.1666 7.49984L19.1666 12.4998M9.16663 4.1665L4.99996 7.49984H1.66663V12.4998H4.99996L9.16663 15.8332V4.1665Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "md": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M23 9L17 15M17 9L23 15M11 5L6 9H2V15H6L11 19V5Z\" stroke=\"#181614\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "lg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M30.6666 11.9998L22.6666 19.9998M22.6666 11.9998L30.6666 19.9998M14.6666 6.6665L7.99996 11.9998H2.66663V19.9998H7.99996L14.6666 25.3332V6.6665Z\" stroke=\"#181614\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "xl": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M38.3334 15.0002L28.3334 25.0002M28.3334 15.0002L38.3334 25.0002M18.3334 8.3335L10 15.0002H3.33337V25.0002H10L18.3334 31.6668V8.3335Z\" stroke=\"#181614\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  "2xl": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M46 18L34 30M34 18L46 30M22 10L12 18H4V30H12L22 38V10Z\" stroke=\"#181614\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n"
} as const;

export const VolumeXIcon = createAdsIcon("VolumeXIcon", svgBySize);
