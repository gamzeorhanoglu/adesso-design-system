import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent
} from "react";

export type DropdownVisualState =
  | "default"
  | "disabled"
  | "filled"
  | "focus"
  | "error"
  | "open";

export interface UseDropdownStateOptions {
  defaultOpen?: boolean;
  defaultValue?: readonly string[];
  disabled?: boolean;
  error?: boolean;
  multiple?: boolean;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string[]) => void;
  open?: boolean;
  value?: readonly string[];
}

export function useDropdownState({
  defaultOpen = false,
  defaultValue = [],
  disabled = false,
  error = false,
  multiple = true,
  onOpenChange,
  onValueChange,
  open,
  value
}: UseDropdownStateOptions) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>([
    ...defaultValue
  ]);
  const resolvedOpen = open ?? uncontrolledOpen;
  const selectedValues = value === undefined ? uncontrolledValue : [...value];

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (disabled) return;
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [disabled, onOpenChange, open]
  );

  const toggleOpen = useCallback(
    () => setOpen(!resolvedOpen),
    [resolvedOpen, setOpen]
  );

  const commitValue = useCallback(
    (nextValue: string[]) => {
      if (value === undefined) setUncontrolledValue(nextValue);
      onValueChange?.(nextValue);
      if (!multiple) setOpen(false);
    },
    [multiple, onValueChange, setOpen, value]
  );

  const handleTriggerFocus = useCallback((event: FocusEvent<HTMLButtonElement>) => {
    if (!event.defaultPrevented) setFocused(true);
  }, []);

  const handleTriggerBlur = useCallback((event: FocusEvent<HTMLButtonElement>) => {
    if (!event.defaultPrevented) setFocused(false);
  }, []);

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

  let state: DropdownVisualState = "default";
  if (disabled) state = "disabled";
  else if (error) state = "error";
  else if (resolvedOpen) state = "open";
  else if (focused) state = "focus";
  else if (selectedValues.length) state = "filled";

  return {
    commitValue,
    handleTriggerBlur,
    handleTriggerFocus,
    handleTriggerKeyDown,
    open: resolvedOpen,
    rootRef,
    selectedValues,
    state,
    toggleOpen
  };
}
