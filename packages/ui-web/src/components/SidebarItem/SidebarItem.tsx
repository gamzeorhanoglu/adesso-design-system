import { ChevronDownIcon, LayersIcon } from "@ads/icons";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Tag } from "../Tag/Tag";

export type SidebarTheme = "light" | "dark";
export type SidebarItemPreviewState = "hover" | "active-hover";

export interface SidebarItemProps
  extends Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "aria-current" | "children" | "data-preview-state"
  > {
  active?: boolean;
  badge?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  error?: boolean;
  icon?: ReactNode;
  showArrow?: boolean;
  showIcon?: boolean;
  showText?: boolean;
  theme?: SidebarTheme;
  /** Documentation-only state override. Product hover remains CSS-managed. */
  "data-preview-state"?: SidebarItemPreviewState;
}

export function SidebarItem({
  active = false,
  badge,
  children,
  className,
  disabled = false,
  error = false,
  href = "#",
  icon,
  onClick,
  showArrow = false,
  showIcon = true,
  showText = true,
  theme = "light",
  ...props
}: SidebarItemProps) {
  const state = disabled ? "disabled" : error ? "error" : active ? "active" : "default";
  const classes = ["ads-sidebar-item", className].filter(Boolean).join(" ");

  return (
    <a
      {...props}
      className={classes}
      data-state={state}
      data-theme={theme}
      href={disabled ? undefined : href}
      aria-current={active ? "page" : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
    >
      <span className="ads-sidebar-item-content">
        {showIcon ? (
          <span className="ads-sidebar-item-icon" aria-hidden="true">
            {icon ?? <LayersIcon size="sm" />}
          </span>
        ) : null}
        {showText ? <span className="ads-sidebar-item-label">{children}</span> : null}
      </span>
      {showText && badge != null ? (
        <Tag className="ads-sidebar-item-badge" variant="solid" color="red" size="small">
          {badge}
        </Tag>
      ) : null}
      {showText && showArrow ? (
        <span className="ads-sidebar-item-arrow" aria-hidden="true">
          <ChevronDownIcon size="sm" />
        </span>
      ) : null}
    </a>
  );
}
