import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface CarouselDotProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  selected?: boolean;
}

export const CarouselDot = forwardRef<HTMLButtonElement, CarouselDotProps>(
  function CarouselDot(
    { "aria-label": ariaLabel, className, selected = false, type = "button", ...props },
    ref
  ) {
    const classes = ["ads-carousel-dot", className].filter(Boolean).join(" ");

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={classes}
        data-state={selected ? "selected" : "default"}
        aria-label={ariaLabel}
        aria-current={selected ? "true" : undefined}
      />
    );
  }
);
