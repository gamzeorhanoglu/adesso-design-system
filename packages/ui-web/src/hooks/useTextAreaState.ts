import {
  useCallback,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type TextareaHTMLAttributes
} from "react";

export type TextAreaVisualState = "default" | "focus" | "filled" | "disabled" | "error";

export interface UseTextAreaStateOptions {
  defaultValue?: TextareaHTMLAttributes<HTMLTextAreaElement>["defaultValue"];
  disabled?: boolean;
  hasError?: boolean;
  onBlur?: TextareaHTMLAttributes<HTMLTextAreaElement>["onBlur"];
  onChange?: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"];
  onFocus?: TextareaHTMLAttributes<HTMLTextAreaElement>["onFocus"];
  value?: TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
}

export function useTextAreaState({
  defaultValue,
  disabled = false,
  hasError = false,
  onBlur,
  onChange,
  onFocus,
  value
}: UseTextAreaStateOptions) {
  const [focused, setFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<
    TextareaHTMLAttributes<HTMLTextAreaElement>["value"]
  >(defaultValue ?? "");
  const controlled = value !== undefined;
  const resolvedValue = controlled ? value : uncontrolledValue;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (!controlled) setUncontrolledValue(event.currentTarget.value);
      onChange?.(event);
    },
    [controlled, onChange]
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLTextAreaElement>) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLTextAreaElement>) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );

  let state: TextAreaVisualState = "default";
  if (disabled) state = "disabled";
  else if (hasError) state = "error";
  else if (focused) state = "focus";
  else if (String(resolvedValue ?? "").length) state = "filled";

  return {
    handleBlur,
    handleChange,
    handleFocus,
    resolvedValue,
    state
  };
}
