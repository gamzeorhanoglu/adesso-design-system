import {
  forwardRef,
  type ForwardRefExoticComponent,
  type HTMLAttributes,
  type RefAttributes
} from "react";

export const iconSizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

export type IconSize = (typeof iconSizes)[number];

export interface AdsIconProps
  extends Omit<
    HTMLAttributes<HTMLSpanElement>,
    "aria-label" | "children" | "dangerouslySetInnerHTML"
  > {
  /** Accessible name. Omit only when the icon is decorative. */
  label?: string;
  /** Exact ADS size variant exported from Figma. */
  size?: IconSize;
}

export type AdsIconComponent = ForwardRefExoticComponent<
  AdsIconProps & RefAttributes<HTMLSpanElement>
>;

export type AdsIconSvgSet = Readonly<Record<IconSize, string>>;

export function createAdsIcon(
  displayName: string,
  svgBySize: AdsIconSvgSet
): AdsIconComponent {
  const Icon = forwardRef<HTMLSpanElement, AdsIconProps>(function AdsIcon(
    { size = "xs", label, className, ...props },
    ref
  ) {
    const classes = ["ads-icon", className].filter(Boolean).join(" ");

    return (
      <span
        {...props}
        ref={ref}
        className={classes}
        data-icon={displayName}
        data-size={size}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        dangerouslySetInnerHTML={{ __html: svgBySize[size] }}
      />
    );
  });

  Icon.displayName = displayName;
  return Icon;
}
