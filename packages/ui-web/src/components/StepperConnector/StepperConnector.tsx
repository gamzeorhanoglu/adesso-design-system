import type { HTMLAttributes } from "react";

export type StepperConnectorState = "default" | "completed" | "disabled";

export interface StepperConnectorProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  state?: StepperConnectorState;
}

/** Internal visual bridge between Step items. Its state reflects the preceding step. */
export function StepperConnector({
  className,
  state = "default",
  ...props
}: StepperConnectorProps) {
  const classes = ["ads-stepper-connector", className].filter(Boolean).join(" ");
  return <span {...props} className={classes} data-state={state} aria-hidden="true" />;
}
