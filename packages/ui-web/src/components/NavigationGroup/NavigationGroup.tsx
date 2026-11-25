import { ChevronUpIcon, XIcon } from "@ads/icons";
import type { HTMLAttributes, ReactNode } from "react";
import { useNavigationGroupDisclosure } from "../../hooks/useNavigationGroupDisclosure";
import { Accordion } from "../Accordion/Accordion";
import { Button } from "../Button/Button";
import { TopNavigation } from "../TopNavigation/TopNavigation";

export type NavigationGroupDevice = "desktop";

export interface NavigationGroupItem {
  content?: ReactNode;
  id: string;
  label: ReactNode;
}

export interface NavigationGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "onChange"> {
  backToTopLabel?: string;
  closeLabel?: string;
  defaultOpen?: boolean;
  device?: NavigationGroupDevice;
  items?: readonly NavigationGroupItem[];
  onBackToTop?: () => void;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  topNavigation?: ReactNode;
}

const defaultItems: readonly NavigationGroupItem[] = [
  { id: "section-one", label: "Lorem Ipsum" },
  { id: "section-two", label: "Lorem Ipsum" },
  { id: "section-three", label: "Lorem Ipsum" },
  { id: "section-four", label: "Lorem Ipsum" },
];

export function NavigationGroup({
  backToTopLabel = "Back to top",
  className,
  closeLabel = "Close navigation",
  defaultOpen = true,
  device = "desktop",
  items = defaultItems,
  onBackToTop,
  onOpenChange,
  open,
  topNavigation,
  ...props
}: NavigationGroupProps) {
  const disclosure = useNavigationGroupDisclosure({
    defaultOpen,
    onOpenChange,
    open,
  });

  if (!disclosure.open) return null;

  const classes = ["ads-navigation-group", className].filter(Boolean).join(" ");

  return (
    <div
      {...props}
      ref={disclosure.rootRef}
      className={classes}
      data-device={device}
      onBlur={disclosure.handleBlur}
      onPointerLeave={disclosure.handlePointerLeave}
    >
      {topNavigation ?? <TopNavigation device="desktop" />}

      <div className="ads-navigation-group-close-row">
        <button
          className="ads-navigation-group-close"
          type="button"
          aria-label={closeLabel}
          onClick={disclosure.close}
        >
          <XIcon size="xl" />
        </button>
      </div>

      <div className="ads-navigation-group-accordions">
        {items.map((item) => (
          <Accordion key={item.id} title={item.label} device="desktop">
            {item.content}
          </Accordion>
        ))}
      </div>

      <div className="ads-navigation-group-up-row">
        <Button
          className="ads-navigation-group-back-to-top"
          variant="icon-only"
          size="medium"
          aria-label={backToTopLabel}
          onClick={onBackToTop}
        >
          <ChevronUpIcon size="lg" />
        </Button>
      </div>
    </div>
  );
}
