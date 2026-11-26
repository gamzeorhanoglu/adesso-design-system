import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

export interface UseNotificationListActionsOptions {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  swipeThreshold?: number;
  swipeEnabled?: boolean;
}

export function useNotificationListActions({
  defaultOpen = false,
  onOpenChange,
  open,
  swipeEnabled = false,
  swipeThreshold = 40
}: UseNotificationListActionsOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const startX = useRef<number | null>(null);
  const resolvedOpen = open ?? uncontrolledOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open]
  );

  const toggle = useCallback(() => setOpen(!resolvedOpen), [resolvedOpen, setOpen]);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (swipeEnabled) startX.current = event.clientX;
    },
    [swipeEnabled]
  );

  const handlePointerUp = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!swipeEnabled || startX.current === null) return;
      const delta = event.clientX - startX.current;
      startX.current = null;
      if (delta <= -swipeThreshold && !resolvedOpen) setOpen(true);
      if (delta >= swipeThreshold && resolvedOpen) setOpen(false);
    },
    [resolvedOpen, setOpen, swipeEnabled, swipeThreshold]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.target !== event.currentTarget) return;
      if (event.key === "ArrowLeft" && swipeEnabled && !resolvedOpen) setOpen(true);
      if ((event.key === "ArrowRight" && swipeEnabled) || event.key === "Escape") {
        if (resolvedOpen) setOpen(false);
      }
    },
    [resolvedOpen, setOpen, swipeEnabled]
  );

  return {
    open: resolvedOpen,
    setOpen,
    toggle,
    rootHandlers: {
      onKeyDown: handleKeyDown,
      onPointerCancel: () => {
        startX.current = null;
      },
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp
    }
  };
}
