import { forwardRef, type ButtonHTMLAttributes } from "react";
import { useCalendarItemSelection } from "../../hooks/useCalendarItemSelection";

export interface CalendarItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onSelect"> {
  "aria-label": string;
  hidden?: boolean;
  inRange?: boolean;
  label: string | number;
  onSelect?: () => void;
  selected?: boolean;
}

export const CalendarItem = forwardRef<HTMLButtonElement, CalendarItemProps>(
  function CalendarItem(
    {
      className,
      disabled = false,
      hidden = false,
      inRange = false,
      label,
      onClick,
      onSelect,
      selected = false,
      type = "button",
      ...props
    },
    ref
  ) {
    const { select } = useCalendarItemSelection({ disabled, hidden, onSelect });
    const state = hidden
      ? "hidden"
      : disabled
        ? "disabled"
        : selected
          ? "selected"
          : inRange
            ? "range"
            : "default";
    const classes = ["ads-calendar-item", className].filter(Boolean).join(" ");

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={classes}
        data-state={state}
        disabled={disabled || hidden}
        aria-hidden={hidden || undefined}
        aria-pressed={selected}
        tabIndex={hidden ? -1 : props.tabIndex}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) select();
        }}
      >
        {label}
      </button>
    );
  }
);
