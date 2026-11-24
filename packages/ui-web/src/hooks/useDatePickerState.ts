import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent
} from "react";

export type DatePickerVisualState =
  | "default"
  | "disabled"
  | "filled"
  | "focus"
  | "error"
  | "open";

export interface UseDatePickerStateOptions {
  defaultInputValue?: string;
  defaultOpen?: boolean;
  defaultValue?: Date;
  disabled?: boolean;
  error?: boolean;
  onInputValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: Date | undefined) => void;
  open?: boolean;
  value?: Date;
}

const pad = (value: number) => String(value).padStart(2, "0");

export const formatDateInput = (date: Date) =>
  `${pad(date.getDate())} / ${pad(date.getMonth() + 1)} / ${date.getFullYear()}`;

export const parseDateInput = (value: string) => {
  const match = value.match(/^\s*(\d{1,2})\s*\/\s*(\d{1,2})\s*\/\s*(\d{4})\s*$/);
  if (!match) return undefined;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return undefined;
  }
  return date;
};

export function useDatePickerState({
  defaultInputValue,
  defaultOpen = false,
  defaultValue,
  disabled = false,
  error = false,
  onInputValueChange,
  onOpenChange,
  onValueChange,
  open,
  value
}: UseDatePickerStateOptions) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [uncontrolledValue, setUncontrolledValue] = useState<Date | undefined>(defaultValue);
  const [uncontrolledInputValue, setUncontrolledInputValue] = useState(
    defaultInputValue ?? (defaultValue ? formatDateInput(defaultValue) : "")
  );
  const resolvedOpen = open ?? uncontrolledOpen;
  const resolvedValue = value ?? uncontrolledValue;
  const inputValue = value ? formatDateInput(value) : uncontrolledInputValue;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (disabled) return;
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [disabled, onOpenChange, open]
  );

  const toggleOpen = useCallback(() => {
    setOpen(!resolvedOpen);
  }, [resolvedOpen, setOpen]);

  const commitValue = useCallback(
    (nextValue: Date | undefined) => {
      if (value === undefined) setUncontrolledValue(nextValue);
      const nextInputValue = nextValue ? formatDateInput(nextValue) : "";
      setUncontrolledInputValue(nextInputValue);
      onInputValueChange?.(nextInputValue);
      onValueChange?.(nextValue);
    },
    [onInputValueChange, onValueChange, value]
  );

  const selectDate = useCallback(
    (date: Date) => {
      commitValue(date);
      setOpen(false);
    },
    [commitValue, setOpen]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextInputValue = event.target.value;
      setUncontrolledInputValue(nextInputValue);
      onInputValueChange?.(nextInputValue);
      const parsed = parseDateInput(nextInputValue);
      if (parsed) {
        if (value === undefined) setUncontrolledValue(parsed);
        onValueChange?.(parsed);
      } else if (!nextInputValue.trim()) {
        if (value === undefined) setUncontrolledValue(undefined);
        onValueChange?.(undefined);
      }
    },
    [onInputValueChange, onValueChange, value]
  );

  const handleFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    if (!event.defaultPrevented) setFocused(true);
  }, []);

  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    if (!event.defaultPrevented) setFocused(false);
  }, []);

  const handleInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape" && resolvedOpen) {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key === "ArrowDown" && !resolvedOpen) {
        event.preventDefault();
        setOpen(true);
      }
    },
    [resolvedOpen, setOpen]
  );

  useEffect(() => {
    if (!resolvedOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [resolvedOpen, setOpen]);

  let state: DatePickerVisualState = "default";
  if (disabled) state = "disabled";
  else if (error) state = "error";
  else if (resolvedOpen) state = "open";
  else if (focused) state = "focus";
  else if (inputValue) state = "filled";

  return {
    handleBlur,
    handleFocus,
    handleInputChange,
    handleInputKeyDown,
    inputValue,
    open: resolvedOpen,
    rootRef,
    selectDate,
    state,
    toggleOpen,
    value: resolvedValue
  };
}
