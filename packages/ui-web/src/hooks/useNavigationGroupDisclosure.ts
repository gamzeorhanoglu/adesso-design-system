import {
  useCallback,
  useRef,
  useState,
  type FocusEvent,
  type PointerEvent,
} from "react";

export interface UseNavigationGroupDisclosureOptions {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export function useNavigationGroupDisclosure({
  defaultOpen = true,
  onOpenChange,
  open,
}: UseNavigationGroupDisclosureOptions) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const resolvedOpen = open ?? uncontrolledOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open],
  );

  const close = useCallback(() => setOpen(false), [setOpen]);

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLDivElement>) => {
      const nextTarget = event.relatedTarget;
      if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) close();
    },
    [close],
  );

  const handlePointerLeave = useCallback(
    (_event: PointerEvent<HTMLDivElement>) => close(),
    [close],
  );

  return {
    close,
    handleBlur,
    handlePointerLeave,
    open: resolvedOpen,
    rootRef,
    setOpen,
  };
}
