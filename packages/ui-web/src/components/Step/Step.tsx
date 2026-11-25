import { CheckIcon } from "@ads/icons";
import type { HTMLAttributes, ReactNode } from "react";

export type StepDevice = "desktop" | "mobile";
export type StepState =
  | "default"
  | "active"
  | "completed"
  | "completed-active"
  | "disabled";

export interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "title"> {
  device?: StepDevice;
  number?: ReactNode;
  showTitle?: boolean;
  state?: StepState;
  title?: ReactNode;
}

export function Step({
  className,
  device = "desktop",
  number = 1,
  showTitle = true,
  state = "default",
  title = "Lorem Ipsum",
  ...props
}: StepProps) {
  const classes = ["ads-step", className].filter(Boolean).join(" ");
  const completed = state === "completed" || state === "completed-active";

  return (
    <div
      {...props}
      className={classes}
      data-device={device}
      data-state={state}
      role="listitem"
      aria-current={state === "active" ? "step" : undefined}
      aria-disabled={state === "disabled" || undefined}
    >
      <span className="ads-step-marker" aria-hidden="true">
        {completed ? (
          <CheckIcon size={device === "desktop" ? "xl" : "md"} />
        ) : (
          <span className="ads-step-number">{number}</span>
        )}
      </span>
      {showTitle ? <span className="ads-step-title">{title}</span> : null}
    </div>
  );
}
