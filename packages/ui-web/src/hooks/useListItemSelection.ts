import { useCallback, type KeyboardEvent } from "react";

export interface UseListItemSelectionOptions {
  disabled?: boolean;
  onSelectionChange?: (selected: boolean) => void;
  selected?: boolean;
}

export function useListItemSelection({
  disabled = false,
  onSelectionChange,
  selected = false
}: UseListItemSelectionOptions) {
  const select = useCallback(() => {
    if (!disabled) onSelectionChange?.(!selected);
  }, [disabled, onSelectionChange, selected]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      select();
    },
    [select]
  );

  return { handleKeyDown, select };
}
