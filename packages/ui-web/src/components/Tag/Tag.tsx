import type { HTMLAttributes, ReactNode } from "react";

export type TagVariant = "soft" | "solid";
export type TagColor = "brand" | "neutral" | "green" | "orange" | "red";
export type TagSize = "large" | "medium" | "small";

interface SharedTagProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "color"> {
  color?: TagColor;
  icon?: ReactNode;
  size?: TagSize;
  variant?: TagVariant;
}

interface TextTagProps extends SharedTagProps {
  children: ReactNode;
}

interface IconOnlyTagProps extends SharedTagProps {
  "aria-label": string;
  children?: never;
  icon: ReactNode;
}

export type TagProps = TextTagProps | IconOnlyTagProps;

export function Tag({
  children,
  className,
  color = "brand",
  icon,
  size = "medium",
  variant = "soft",
  ...props
}: TagProps) {
  const rootClassName = [
    "ads-tag",
    `variant-${variant}`,
    `color-${color}`,
    `size-${size}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span {...props} className={rootClassName}>
      {icon ? <span className="ads-tag-icon" aria-hidden="true">{icon}</span> : null}
      {children ? <span className="ads-tag-text">{children}</span> : null}
    </span>
  );
}
