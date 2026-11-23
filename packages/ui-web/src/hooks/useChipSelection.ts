import { useCallback, useState } from "react";

export interface UseChipSelectionOptions {
  defaultSelected?: boolean;
  disabled?: boolean;
  onSelectedChange?: (selected: boolean) => void;
  selected?: boolean;
}

export function useChipSelection({
  defaultSelected = false,
  disabled = false,
  onSelectedChange,
  selected
}: UseChipSelectionOptions) {
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const resolvedSelected = selected ?? internalSelected;

  const toggle = useCallback(() => {
    if (disabled) return;
    const nextSelected = !resolvedSelected;
    if (selected === undefined) setInternalSelected(nextSelected);
    onSelectedChange?.(nextSelected);
  }, [disabled, onSelectedChange, resolvedSelected, selected]);

  return { selected: resolvedSelected, toggle };
}
