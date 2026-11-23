import {
  useCallback,
  useRef,
  type ForwardedRef
} from "react";

interface UseInputClearOptions {
  disabled: boolean;
  forwardedRef: ForwardedRef<HTMLInputElement>;
  hasValue: boolean;
  onClear?: () => void;
  readOnly: boolean;
  clearValue: () => void;
}

export function useInputClear({
  disabled,
  forwardedRef,
  hasValue,
  onClear,
  readOnly,
  clearValue
}: UseInputClearOptions) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const canClear = hasValue && !disabled && !readOnly;

  const setInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );

  const handleClear = useCallback(() => {
    if (!canClear) return;
    clearValue();
    onClear?.();
    inputRef.current?.focus();
  }, [canClear, clearValue, onClear]);

  return { canClear, handleClear, setInputRef };
}
