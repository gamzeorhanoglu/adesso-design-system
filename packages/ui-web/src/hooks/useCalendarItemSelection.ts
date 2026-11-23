import { useCallback } from "react";

export interface UseCalendarItemSelectionOptions {
  disabled?: boolean;
  hidden?: boolean;
  onSelect?: () => void;
}

export function useCalendarItemSelection({
  disabled = false,
  hidden = false,
  onSelect
}: UseCalendarItemSelectionOptions) {
  const select = useCallback(() => {
    if (!disabled && !hidden) onSelect?.();
  }, [disabled, hidden, onSelect]);

  return { select };
}
