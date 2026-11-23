import { useCallback, useRef, type KeyboardEvent } from "react";

export function useChipGroupKeyboardNavigation() {
  const rootRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const chips = Array.from(
      rootRef.current?.querySelectorAll<HTMLButtonElement>(".ads-chip:not(:disabled)") ?? []
    );
    if (!chips.length) return;

    const currentIndex = chips.indexOf(event.target as HTMLButtonElement);
    if (currentIndex < 0) return;
    let nextIndex = currentIndex;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + chips.length) % chips.length;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % chips.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = chips.length - 1;
    event.preventDefault();
    chips[nextIndex]?.focus();
  }, []);

  return { handleKeyDown, rootRef };
}
