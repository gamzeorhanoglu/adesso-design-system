import type { ImgHTMLAttributes } from "react";
import logoOriginal from "../../assets/brand/adesso-logo-original.svg";

export interface LogoProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "alt" | "height" | "src" | "width"
  > {
  label?: string;
}

export function Logo({ className, label = "adesso", ...props }: LogoProps) {
  const classes = ["ads-logo", className].filter(Boolean).join(" ");

  return (
    <img
      {...props}
      className={classes}
      src={logoOriginal}
      width={321.462}
      height={120}
      alt={label}
    />
  );
}
