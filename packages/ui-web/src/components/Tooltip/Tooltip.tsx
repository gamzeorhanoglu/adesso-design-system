import type { HTMLAttributes } from "react";

export type TooltipPlacement = "top" | "bottom" | "right" | "left";
export type TooltipColor = "light" | "dark";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "color" | "title"> {
  bodyText?: string;
  color?: TooltipColor;
  placement?: TooltipPlacement;
  title: string;
}

export function Tooltip({
  bodyText,
  className,
  color = "light",
  placement = "top",
  title,
  ...props
}: TooltipProps) {
  const rootClassName = [
    "ads-tooltip",
    `color-${color}`,
    `placement-${placement}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span {...props} className={rootClassName} role="tooltip">
      <span className="ads-tooltip-title">{title}</span>
      {bodyText ? <span className="ads-tooltip-body">{bodyText}</span> : null}
    </span>
  );
}
