import { useCallback, useMemo, useState } from "react";

export interface DropdownListOption {
  disabled?: boolean;
  label: string;
  value: string;
}

interface UseDropdownListStateOptions {
  defaultValue?: readonly string[];
  multiple: boolean;
  onValueChange?: (value: string[]) => void;
  options: readonly DropdownListOption[];
  value?: readonly string[];
}

export function useDropdownListState({
  defaultValue = [],
  multiple,
  onValueChange,
  options,
  value
}: UseDropdownListStateOptions) {
  const [query, setQuery] = useState("");
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>([...defaultValue]);
  const controlled = value !== undefined;
  const selectedValues = controlled ? [...value] : uncontrolledValue;

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return options;
    return options.filter((option) =>
      option.label.toLocaleLowerCase().includes(normalizedQuery)
    );
  }, [options, query]);

  const commit = useCallback(
    (nextValue: string[]) => {
      if (!controlled) setUncontrolledValue(nextValue);
      onValueChange?.(nextValue);
    },
    [controlled, onValueChange]
  );

  const toggleValue = useCallback(
    (optionValue: string) => {
      const option = options.find((candidate) => candidate.value === optionValue);
      if (!option || option.disabled) return;

      if (!multiple) {
        commit([optionValue]);
        return;
      }

      commit(
        selectedValues.includes(optionValue)
          ? selectedValues.filter((candidate) => candidate !== optionValue)
          : [...selectedValues, optionValue]
      );
    },
    [commit, multiple, options, selectedValues]
  );

  const clearAll = useCallback(() => commit([]), [commit]);
  const selectableValues = options
    .filter((option) => !option.disabled)
    .map((option) => option.value);
  const allSelected =
    selectableValues.length > 0 &&
    selectableValues.every((optionValue) => selectedValues.includes(optionValue));
  const selectAll = useCallback(() => commit(selectableValues), [commit, selectableValues]);

  return {
    allSelected,
    clearAll,
    filteredOptions,
    query,
    selectAll,
    selectedValues,
    setQuery,
    toggleValue
  };
}
