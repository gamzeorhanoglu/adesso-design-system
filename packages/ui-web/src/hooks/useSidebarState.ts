import { useCallback, useState } from "react";

export interface UseSidebarStateOptions {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export function useSidebarState({
  defaultOpen = true,
  onOpenChange,
  open,
}: UseSidebarStateOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const resolvedOpen = open ?? uncontrolledOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open],
  );

  const toggle = useCallback(() => setOpen(!resolvedOpen), [resolvedOpen, setOpen]);

  return { open: resolvedOpen, setOpen, toggle };
}
