import { CompassIcon } from "@ads/icons";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode
} from "react";

export type NavigationItemDevice = "desktop" | "mobile";

export interface NavigationItemProps
  extends Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "aria-current" | "children" | "data-preview-state"
  > {
  children: ReactNode;
  device?: NavigationItemDevice;
  icon?: ReactNode;
  /** Documentation-only state override. Product hover remains CSS-managed. */
  "data-preview-state"?: "hover";
  selected?: boolean;
}

export const NavigationItem = forwardRef<HTMLAnchorElement, NavigationItemProps>(
  function NavigationItem(
    {
      children,
      className,
      device = "desktop",
      icon,
      selected = false,
      ...props
    },
    ref
  ) {
    const classes = ["ads-navigation-item", className].filter(Boolean).join(" ");
    const navigationIcon = icon ?? (
      <CompassIcon size={device === "desktop" ? "lg" : "md"} />
    );

    return (
      <a
        {...props}
        ref={ref}
        className={classes}
        data-device={device}
        data-state={selected ? "selected" : "default"}
        aria-current={selected ? "page" : undefined}
      >
        <span className="ads-navigation-item-icon" aria-hidden="true">
          {navigationIcon}
        </span>
        <span className="ads-navigation-item-label">{children}</span>
      </a>
    );
  }
);
