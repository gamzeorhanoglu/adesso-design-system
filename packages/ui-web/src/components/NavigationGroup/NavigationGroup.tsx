import { ChevronUpIcon, XIcon } from "@ads/icons";
import type { HTMLAttributes, ReactNode } from "react";
import { useNavigationGroupDisclosure, useNavigationGroupMobileFocus } from "../../hooks/useNavigationGroupDisclosure";
import { Accordion } from "../Accordion/Accordion";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import { Button } from "../Button/Button";
import { TopNavigation } from "../TopNavigation/TopNavigation";

export type NavigationGroupDevice = "desktop" | "mobile";
export type NavigationGroupMobileView = "top" | "detail";

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
  mobileView?: NavigationGroupMobileView;
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
  mobileView = "top",
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

  useNavigationGroupMobileFocus(disclosure.rootRef, device === "mobile" && disclosure.open, disclosure.close);

  if (!disclosure.open) return null;

  const classes = ["ads-navigation-group", className].filter(Boolean).join(" ");

  return (
    <div
      {...props}
      ref={disclosure.rootRef}
      className={classes}
      data-device={device}
      data-mobile-view={device === "mobile" ? mobileView : undefined}
      role={device === "mobile" ? "dialog" : undefined}
      aria-modal={device === "mobile" ? true : undefined}
      aria-label={device === "mobile" ? "Navigation menu" : undefined}
      onBlur={device === "desktop" ? disclosure.handleBlur : undefined}
      onPointerLeave={device === "desktop" ? disclosure.handlePointerLeave : undefined}
    >
      {topNavigation ?? <TopNavigation device={device} menuExpanded={device === "mobile"} onMenuClick={disclosure.close} />}

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

      {device === "mobile" && mobileView === "top" ? (
        <nav className="ads-navigation-group-mobile-items" aria-label="Mobile navigation">
          {items.slice(0, 3).map((item) => (
            <NavigationItem key={item.id} href={`#${item.id}`} device="mobile">
              {item.label}
            </NavigationItem>
          ))}
        </nav>
      ) : (
        <div className="ads-navigation-group-accordions">
          {items.map((item) => (
            <Accordion key={item.id} title={item.label} device={device}>
              {item.content}
            </Accordion>
          ))}
        </div>
      )}

      {device === "desktop" ? <div className="ads-navigation-group-up-row">
        <Button
          className="ads-navigation-group-back-to-top"
          variant="icon-only"
          size="medium"
          aria-label={backToTopLabel}
          onClick={onBackToTop}
        >
          <ChevronUpIcon size="lg" />
        </Button>
      </div> : null}
    </div>
  );
}
