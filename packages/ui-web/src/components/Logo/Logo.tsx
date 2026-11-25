import type { ImgHTMLAttributes } from "react";
import logoOriginal from "../../assets/brand/adesso-logo-original.svg";
import logoWhite from "../../assets/brand/adesso-logo-white.svg";

export type LogoVariant = "original" | "white";

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

  return (
    <img
      {...props}
      className={classes}
      src={variant === "white" ? logoWhite : logoOriginal}
      width={321.462}
      height={120}
      alt={label}
    />
  );
}
