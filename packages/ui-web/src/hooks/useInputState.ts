import {
  useCallback,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes
} from "react";

export type InputVisualState = "default" | "focus" | "filled" | "disabled" | "error";

interface UseInputStateOptions {
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  defaultValue: InputHTMLAttributes<HTMLInputElement>["defaultValue"];
  disabled: boolean;
  hasError: boolean;
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
  onFocus: InputHTMLAttributes<HTMLInputElement>["onFocus"];
  onBlur: InputHTMLAttributes<HTMLInputElement>["onBlur"];
}

export function useInputState({
  value,
  defaultValue,
  disabled,
  hasError,
  onChange,
  onFocus,
  onBlur
}: UseInputStateOptions) {
  const [focused, setFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<
    InputHTMLAttributes<HTMLInputElement>["value"]
  >(defaultValue ?? "");
  const controlled = value !== undefined;
  const resolvedValue = controlled ? value : uncontrolledValue;
  const hasValue = String(resolvedValue ?? "").length > 0;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!controlled) setUncontrolledValue(event.currentTarget.value);
      onChange?.(event);
    },
    [controlled, onChange]
  );

  const clearValue = useCallback(() => {
    if (!controlled) setUncontrolledValue("");
  }, [controlled]);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );

  let state: InputVisualState = "default";
  if (disabled) state = "disabled";
  else if (hasError) state = "error";
  else if (focused) state = "focus";
  else if (hasValue) state = "filled";

  return {
    state,
    hasValue,
    resolvedValue,
    clearValue,
    handleChange,
    handleFocus,
    handleBlur
  };
}

