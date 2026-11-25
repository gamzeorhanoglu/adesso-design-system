import { ArrowLeftIcon, ArrowRightIcon } from "@ads/icons";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export type PaginationDirection = "previous" | "next";
export interface PaginationControlsProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  direction: PaginationDirection;
  showLabel?: boolean;
  label?: string;
  /** Documentation-only visual state. Hover is normally CSS-managed. */
  "data-preview-state"?: "hover";
}

export const PaginationControls = forwardRef<HTMLButtonElement, PaginationControlsProps>(
  function PaginationControls({ direction, showLabel = true, label, className, ...props }, ref) {
    const text = label ?? (direction === "previous" ? "Previous" : "Next");
    const icon = direction === "previous" ? <ArrowLeftIcon size="xs" /> : <ArrowRightIcon size="xs" />;
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        aria-label={text}
        className={["ads-pagination-controls", className].filter(Boolean).join(" ")}
        data-direction={direction}
      >
        {direction === "previous" ? icon : null}
        {showLabel ? <span>{text}</span> : null}
        {direction === "next" ? icon : null}
      </button>
    );
  },
);
