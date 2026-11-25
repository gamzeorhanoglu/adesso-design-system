import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@ads/icons";
import {
  useId,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useAccordionState } from "../../hooks/useAccordionState";

export type AccordionDevice = "desktop" | "mobile";

export interface AccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "onChange" | "title"> {
  children?: ReactNode;
  defaultOpen?: boolean;
  device?: AccordionDevice;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  showIcon?: boolean;
  title: ReactNode;
}

export function Accordion({
  children,
  className,
  defaultOpen,
  device = "desktop",
  onOpenChange,
  open,
  showIcon = true,
  title,
  ...props
}: AccordionProps) {
  const generatedId = useId();
  const triggerId = `ads-accordion-trigger-${generatedId}`;
  const panelId = `ads-accordion-panel-${generatedId}`;
  const state = useAccordionState({ defaultOpen, onOpenChange, open });
  const classes = ["ads-accordion", className].filter(Boolean).join(" ");
  const Icon = state.open ? ChevronUpIcon : ChevronDownIcon;

  return (
    <div
      {...props}
      className={classes}
      data-device={device}
      data-open={state.open ? "true" : "false"}
    >
      <button
        className="ads-accordion-trigger"
        id={triggerId}
        type="button"
        aria-expanded={state.open}
        aria-controls={children ? panelId : undefined}
        onClick={state.toggleOpen}
      >
        <span className="ads-accordion-title">{title}</span>
        {showIcon ? (
          <span className="ads-accordion-icon" aria-hidden="true">
            <Icon size={device === "desktop" ? "xl" : "md"} />
          </span>
        ) : null}
      </button>
      {children && state.open ? (
        <div
          className="ads-accordion-panel"
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
