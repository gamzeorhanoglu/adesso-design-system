import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode
} from "react";
import { useChipGroupKeyboardNavigation } from "../../hooks/useChipGroupKeyboardNavigation";

export interface ChipGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  "aria-label": string;
  children: ReactNode;
}

export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(
  function ChipGroup(
    { "aria-label": ariaLabel, children, className, onKeyDown, ...props },
    forwardedRef
  ) {
    const { handleKeyDown, rootRef } = useChipGroupKeyboardNavigation();
    const classes = ["ads-chip-group", className].filter(Boolean).join(" ");
    const setRootRef = (node: HTMLDivElement | null) => {
      rootRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    return (
      <div
        {...props}
        ref={setRootRef}
        className={classes}
        role="group"
        aria-label={ariaLabel}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (!event.defaultPrevented) handleKeyDown(event);
        }}
      >
        {children}
      </div>
    );
  }
);
