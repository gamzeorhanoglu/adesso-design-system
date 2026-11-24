import { useCallback, useRef, useState, type KeyboardEvent } from "react";

export interface UseCarouselControlOptions {
  count: number;
  defaultSelectedIndex?: number;
  onSelectedIndexChange?: (index: number) => void;
  selectedIndex?: number;
}

function clampIndex(index: number, count: number) {
  return Math.min(Math.max(index, 0), Math.max(count - 1, 0));
}

export function useCarouselControl({
  count,
  defaultSelectedIndex = 0,
  onSelectedIndexChange,
  selectedIndex
}: UseCarouselControlOptions) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [internalSelectedIndex, setInternalSelectedIndex] = useState(() =>
    clampIndex(defaultSelectedIndex, count)
  );
  const resolvedSelectedIndex = clampIndex(
    selectedIndex ?? internalSelectedIndex,
    count
  );

  const select = useCallback(
    (index: number) => {
      if (count < 1) return;
      const nextIndex = clampIndex(index, count);
      if (selectedIndex === undefined) setInternalSelectedIndex(nextIndex);
      onSelectedIndexChange?.(nextIndex);
    },
    [count, onSelectedIndexChange, selectedIndex]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

      let nextIndex = index;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + count) % count;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % count;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = count - 1;

      event.preventDefault();
      select(nextIndex);
      rootRef.current
        ?.querySelectorAll<HTMLButtonElement>(".ads-carousel-dot")
        [nextIndex]?.focus();
    },
    [count, select]
  );

  return { handleKeyDown, rootRef, select, selectedIndex: resolvedSelectedIndex };
}
