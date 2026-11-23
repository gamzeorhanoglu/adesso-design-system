import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { useChipSelection } from "../../hooks/useChipSelection";

export type ChipSize = "large" | "medium" | "small";

export interface ChipProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onChange"> {
  children: ReactNode;
  defaultSelected?: boolean;
  icon?: ReactNode;
  onSelectedChange?: (selected: boolean) => void;
  selected?: boolean;
  size?: ChipSize;
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  {
    children,
    className,
    defaultSelected = false,
    disabled = false,
    icon,
    onClick,
    onSelectedChange,
    selected,
    size = "large",
    type = "button",
    ...props
  },
  ref
) {
  const selection = useChipSelection({
    defaultSelected,
    disabled,
    onSelectedChange,
    selected
  });
  const state = disabled ? "disabled" : selection.selected ? "selected" : "default";
  const classes = ["ads-chip", `size-${size}`, className].filter(Boolean).join(" ");

  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={classes}
      data-state={state}
      aria-pressed={selection.selected}
      disabled={disabled}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) selection.toggle();
      }}
    >
      {icon ? <span className="ads-chip-icon" aria-hidden="true">{icon}</span> : null}
      <span className="ads-chip-label">{children}</span>
    </button>
  );
});
