import type { ImgHTMLAttributes } from "react";
import faviconOriginal from "../../assets/brand/adesso-favicon-original.svg";
import faviconWhite from "../../assets/brand/adesso-favicon-white.svg";
import logoOriginal from "../../assets/brand/adesso-logo-original.svg";
import logoWhite from "../../assets/brand/adesso-logo-white.svg";

export type LogoVariant =
  | "original"
  | "white"
  | "favicon-original"
  | "favicon-white";

export interface LogoProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "alt" | "height" | "src" | "width"
  > {
  label?: string;
  variant?: LogoVariant;
}

export function Logo({
  className,
  label = "adesso",
  variant = "original",
  ...props
}: LogoProps) {
  const classes = ["ads-logo", `variant-${variant}`, className]
    .filter(Boolean)
    .join(" ");
  const isFavicon = variant.startsWith("favicon-");
  const source = {
    original: logoOriginal,
    white: logoWhite,
    "favicon-original": faviconOriginal,
    "favicon-white": faviconWhite,
  }[variant];

  return (
    <img
      {...props}
      className={classes}
      src={source}
      width={isFavicon ? 64.2462 : variant === "white" ? 322 : 321.462}
      height={120}
      alt={label}
    />
  );
}
