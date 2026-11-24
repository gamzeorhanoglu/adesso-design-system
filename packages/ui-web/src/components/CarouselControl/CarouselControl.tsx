import {
  forwardRef,
  type HTMLAttributes
} from "react";
import { useCarouselControl } from "../../hooks/useCarouselControl";
import { CarouselDot } from "../CarouselDot/CarouselDot";

export interface CarouselControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  "aria-label"?: string;
  count: number;
  defaultSelectedIndex?: number;
  getItemLabel?: (index: number) => string;
  onSelectedIndexChange?: (index: number) => void;
  selectedIndex?: number;
}

export const CarouselControl = forwardRef<HTMLDivElement, CarouselControlProps>(
  function CarouselControl(
    {
      "aria-label": ariaLabel = "Carousel navigation",
      className,
      count,
      defaultSelectedIndex = 0,
      getItemLabel = (index) => `Go to slide ${index + 1}`,
      onSelectedIndexChange,
      selectedIndex,
      ...props
    },
    forwardedRef
  ) {
    const control = useCarouselControl({
      count,
      defaultSelectedIndex,
      onSelectedIndexChange,
      selectedIndex
    });
    const classes = ["ads-carousel-control", className].filter(Boolean).join(" ");
    const setRootRef = (node: HTMLDivElement | null) => {
      control.rootRef.current = node;
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
      >
        {Array.from({ length: Math.max(count, 0) }, (_, index) => {
          const selected = index === control.selectedIndex;
          return (
            <CarouselDot
              key={index}
              aria-label={getItemLabel(index)}
              selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => control.select(index)}
              onKeyDown={(event) => control.handleKeyDown(event, index)}
            />
          );
        })}
      </div>
    );
  }
);
