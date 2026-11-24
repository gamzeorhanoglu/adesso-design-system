import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent
} from "react";

export function useTextAreaResize(enabled: boolean) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const drag = useRef<{ height: number; pointerY: number } | null>(null);

  const handleResizePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLSpanElement>) => {
      if (!enabled || !textareaRef.current) return;
      event.preventDefault();
      drag.current = {
        height: textareaRef.current.getBoundingClientRect().height,
        pointerY: event.clientY
      };
    },
    [enabled]
  );

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!drag.current || !textareaRef.current) return;
      const nextHeight = drag.current.height + event.clientY - drag.current.pointerY;
      textareaRef.current.style.height = `${Math.max(0, nextHeight)}px`;
    };
    const handlePointerUp = () => {
      drag.current = null;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return { handleResizePointerDown, textareaRef };
}
