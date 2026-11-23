import { useCallback, useState, type KeyboardEvent } from "react";

export interface UseLanguageSelectorOptions {
  defaultOpen?: boolean;
  defaultValue: string;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string) => void;
  open?: boolean;
  value?: string;
}

export function useLanguageSelector({
  defaultOpen = false,
  defaultValue,
  onOpenChange,
  onValueChange,
  open,
  value
}: UseLanguageSelectorOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const resolvedOpen = open ?? uncontrolledOpen;
  const resolvedValue = value ?? uncontrolledValue;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open]
  );

  const toggleOpen = useCallback(() => setOpen(!resolvedOpen), [resolvedOpen, setOpen]);

  const selectValue = useCallback(
    (nextValue: string) => {
      if (value === undefined) setUncontrolledValue(nextValue);
      onValueChange?.(nextValue);
      setOpen(false);
    },
    [onValueChange, setOpen, value]
  );

  const handleTriggerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Escape" && resolvedOpen) {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if ((event.key === "ArrowDown" || event.key === "ArrowUp") && !resolvedOpen) {
        event.preventDefault();
        setOpen(true);
      }
    },
    [resolvedOpen, setOpen]
  );

  return {
    handleTriggerKeyDown,
    open: resolvedOpen,
    selectValue,
    toggleOpen,
    value: resolvedValue
  };
}
