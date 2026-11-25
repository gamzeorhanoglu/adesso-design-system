import { useCallback, useState } from "react";

export interface UseAccordionStateOptions {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export function useAccordionState({
  defaultOpen = false,
  onOpenChange,
  open,
}: UseAccordionStateOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const resolvedOpen = open ?? uncontrolledOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open],
  );

  const toggleOpen = useCallback(
    () => setOpen(!resolvedOpen),
    [resolvedOpen, setOpen],
  );

  return { open: resolvedOpen, setOpen, toggleOpen };
}
