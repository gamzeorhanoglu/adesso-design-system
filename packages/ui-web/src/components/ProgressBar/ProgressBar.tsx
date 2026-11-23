import { InfoIcon } from "@ads/icons";
import type { CSSProperties, HTMLAttributes } from "react";

export type ProgressBarType = "brand" | "neutral" | "green" | "red" | "orange";
export type ProgressBarSize = "small" | "medium" | "large";

export interface ProgressBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> {
  label: string;
  max?: number;
  min?: number;
  showInfo?: boolean;
  showLabel?: boolean;
  showValue?: boolean;
  size?: ProgressBarSize;
  type?: ProgressBarType;
  value: number;
  valueText?: string;
}

type ProgressBarStyle = CSSProperties & {
  "--ads-progress-value": string;
};

export function ProgressBar({
  "aria-label": ariaLabel,
  className,
  label,
  max = 100,
  min = 0,
  showInfo = true,
  showLabel = true,
  showValue = true,
  size = "small",
  style,
  type = "brand",
  value,
  valueText,
  ...props
}: ProgressBarProps) {
  const safeMax = max > min ? max : min + 1;
  const clampedValue = Math.min(Math.max(value, min), safeMax);
  const percentage = ((clampedValue - min) / (safeMax - min)) * 100;
  const displayValue = valueText ?? `${Math.round(percentage)}%`;
  const rootClassName = [
    "ads-progress-bar",
    `type-${type}`,
    `size-${size}`,
    className
  ]
    .filter(Boolean)
    .join(" ");
  const rootStyle: ProgressBarStyle = {
    ...style,
    "--ads-progress-value": `${percentage}%`
  };

  return (
    <div
      {...props}
      aria-label={ariaLabel ?? label}
      aria-valuemax={safeMax}
      aria-valuemin={min}
      aria-valuenow={clampedValue}
      aria-valuetext={displayValue}
      className={rootClassName}
      role="progressbar"
      style={rootStyle}
    >
      {showLabel || showValue ? (
        <span className="ads-progress-bar-header">
          {showLabel ? (
            <span className="ads-progress-bar-label">
              <span>{label}</span>
              {showInfo ? (
                <span className="ads-progress-bar-info" aria-hidden="true">
                  <InfoIcon size={size === "large" ? "sm" : "xs"} />
                </span>
              ) : null}
            </span>
          ) : null}
          {showValue ? <span className="ads-progress-bar-value">{displayValue}</span> : null}
        </span>
      ) : null}
      <span className="ads-progress-bar-track" aria-hidden="true">
        <span className="ads-progress-bar-fill" />
      </span>
    </div>
  );
}
