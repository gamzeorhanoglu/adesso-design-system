import type { ImgHTMLAttributes } from "react";
import germanyLg from "../../assets/flags/germany-lg.png";
import germanyMd from "../../assets/flags/germany-md.png";
import saudiArabiaLg from "../../assets/flags/saudi-arabia-lg.png";
import saudiArabiaMd from "../../assets/flags/saudi-arabia-md.png";
import spainLg from "../../assets/flags/spain-lg.png";
import spainMd from "../../assets/flags/spain-md.png";
import turkeyLg from "../../assets/flags/turkey-lg.png";
import turkeyMd from "../../assets/flags/turkey-md.png";
import usaLg from "../../assets/flags/usa-lg.png";
import usaMd from "../../assets/flags/usa-md.png";

export type FlagCountry =
  | "germany"
  | "saudi-arabia"
  | "spain"
  | "turkey"
  | "usa";

export type FlagSize = "md" | "lg";

export interface FlagProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "alt" | "height" | "src" | "width"
  > {
  country?: FlagCountry;
  label?: string;
  size?: FlagSize;
}

const flagAssets: Record<FlagCountry, Record<FlagSize, string>> = {
  germany: { md: germanyMd, lg: germanyLg },
  "saudi-arabia": { md: saudiArabiaMd, lg: saudiArabiaLg },
  spain: { md: spainMd, lg: spainLg },
  turkey: { md: turkeyMd, lg: turkeyLg },
  usa: { md: usaMd, lg: usaLg }
};

const flagDimensions: Record<FlagSize, number> = {
  md: 24,
  lg: 32
};

export function Flag({
  className,
  country = "turkey",
  label,
  size = "md",
  ...props
}: FlagProps) {
  const dimension = flagDimensions[size];
  const classes = ["ads-flag", `size-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      {...props}
      className={classes}
      src={flagAssets[country][size]}
      width={dimension}
      height={dimension}
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
    />
  );
}
