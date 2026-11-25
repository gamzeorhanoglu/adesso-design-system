import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface PaginationItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  page: number;
  active?: boolean;
  /** Documentation-only visual state. Hover is normally CSS-managed. */
  "data-preview-state"?: "hover" | "active-hover";
}

export const PaginationItem = forwardRef<HTMLButtonElement, PaginationItemProps>(
  function PaginationItem({ page, active = false, className, ...props }, ref) {
    const classes = ["ads-pagination-item", className].filter(Boolean).join(" ");
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className={classes}
        aria-current={active ? "page" : undefined}
        aria-label={`Page ${page}`}
        data-state={active ? "active" : "default"}
      >
        {page}
      </button>
    );
  },
);
