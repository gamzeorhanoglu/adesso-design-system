import { useCallback, useState, type ChangeEvent } from "react";

interface UseCountrySelectionOptions {
  defaultValue?: string;
  fallbackValue?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function useCountrySelection({
  defaultValue,
  fallbackValue = "",
  onChange,
  value
}: UseCountrySelectionOptions) {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? fallbackValue
  );
  const controlled = value !== undefined;
  const selectedValue = controlled ? value : uncontrolledValue;

  const handleCountryChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextValue = event.currentTarget.value;
      if (!controlled) setUncontrolledValue(nextValue);
      onChange?.(nextValue);
    },
    [controlled, onChange]
  );

  return { handleCountryChange, selectedValue };
}
