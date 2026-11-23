import { useCallback, useState, type HTMLInputTypeAttribute } from "react";

interface UsePasswordVisibilityOptions {
  defaultVisible?: boolean;
  disabled: boolean;
  masked: boolean;
  nativeType?: HTMLInputTypeAttribute;
  onVisibilityChange?: (visible: boolean) => void;
  readOnly: boolean;
  visible?: boolean;
}

export function usePasswordVisibility({
  defaultVisible = false,
  disabled,
  masked,
  nativeType,
  onVisibilityChange,
  readOnly,
  visible
}: UsePasswordVisibilityOptions) {
  const [uncontrolledVisible, setUncontrolledVisible] = useState(defaultVisible);
  const controlled = visible !== undefined;
  const resolvedVisible = controlled ? visible : uncontrolledVisible;
  const canToggle = masked && !disabled && !readOnly;

  const toggleVisibility = useCallback(() => {
    if (!canToggle) return;
    const nextVisible = !resolvedVisible;
    if (!controlled) setUncontrolledVisible(nextVisible);
    onVisibilityChange?.(nextVisible);
  }, [canToggle, controlled, onVisibilityChange, resolvedVisible]);

  return {
    canToggle,
    inputType: masked ? (resolvedVisible ? "text" : "password") : (nativeType ?? "text"),
    toggleVisibility,
    visible: resolvedVisible
  };
}
