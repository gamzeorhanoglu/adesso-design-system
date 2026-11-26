import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export type TabSize = "large" | "medium" | "small";
export type TabVariant = "primary" | "secondary";

export interface TabProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: ReactNode;
  selected?: boolean;
  size?: TabSize;
  variant?: TabVariant;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  {
    children = "Option Text",
    className,
    disabled = false,
    selected = false,
    size = "medium",
    type = "button",
    variant = "primary",
    ...props
  },
  ref,
) {
  const state = disabled ? "disabled" : selected ? "selected" : "default";

  return (
    <button
      {...props}
      aria-selected={selected}
      className={["ads-tab", className].filter(Boolean).join(" ")}
      data-size={size}
      data-state={state}
      data-variant={variant}
      disabled={disabled}
      ref={ref}
      role="tab"
      type={type}
    >
      {children}
    </button>
  );
});
