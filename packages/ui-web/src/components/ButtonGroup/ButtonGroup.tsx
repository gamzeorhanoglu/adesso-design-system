import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode
} from "react";

export type ButtonGroupOrientation = "horizontal" | "vertical";

export interface ButtonGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  "aria-label": string;
  children: ReactNode;
  orientation?: ButtonGroupOrientation;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    {
      "aria-label": ariaLabel,
      children,
      className,
      orientation = "horizontal",
      ...props
    },
    ref
  ) {
    const classes = [
      "ads-button-group",
      `orientation-${orientation}`,
      className
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        aria-orientation={orientation}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);
