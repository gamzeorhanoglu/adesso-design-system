import { useEffect, useRef, type ForwardedRef } from "react";

interface UseCheckboxIndeterminateOptions {
  forwardedRef: ForwardedRef<HTMLInputElement>;
  indeterminate: boolean;
}

export function useCheckboxIndeterminate({
  forwardedRef,
  indeterminate
}: UseCheckboxIndeterminateOptions) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  function setInputRef(node: HTMLInputElement | null) {
    inputRef.current = node;
    if (node) node.indeterminate = indeterminate;

    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  return { setInputRef };
}
