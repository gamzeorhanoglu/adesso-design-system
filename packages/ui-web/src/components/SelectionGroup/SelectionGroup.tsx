import type { HTMLAttributes, ReactNode } from "react";

export interface SelectionGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  "aria-label": string;
  children: ReactNode;
}

export function SelectionGroup({
  "aria-label": ariaLabel,
  children,
  className,
  ...props
}: SelectionGroupProps) {
  const rootClassName = ["ads-selection-group", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={rootClassName} role="group" aria-label={ariaLabel}>
      {children}
    </div>
  );
}
