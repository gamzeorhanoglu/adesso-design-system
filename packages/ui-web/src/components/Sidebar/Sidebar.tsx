import { ChevronLeftIcon, ChevronRightIcon, LayersIcon } from "@ads/icons";
import type { HTMLAttributes, ReactNode } from "react";
import { useSidebarState } from "../../hooks/useSidebarState";
import { Logo } from "../Logo/Logo";
import { SidebarItem, type SidebarTheme } from "../SidebarItem/SidebarItem";
import { SidebarProfile } from "../SidebarProfile/SidebarProfile";

export interface SidebarNavigationItem {
  active?: boolean;
  badge?: ReactNode;
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  id: string;
  label: ReactNode;
  showArrow?: boolean;
}

export interface SidebarProfileData {
  initials?: string;
  name?: string;
  role?: string;
}

export interface SidebarProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  collapseLabel?: string;
  defaultOpen?: boolean;
  errorItemLabel?: ReactNode;
  expandLabel?: string;
  items?: readonly SidebarNavigationItem[];
  logoLabel?: string;
  navLabel?: string;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  profile?: SidebarProfileData;
  showProfile?: boolean;
  theme?: SidebarTheme;
}

const defaultItems: readonly SidebarNavigationItem[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: `sidebar-item-${index + 1}`,
    label: "Lorem Ipsum",
    href: `#sidebar-item-${index + 1}`,
    icon: <LayersIcon size="sm" />,
  }),
);

export function Sidebar({
  className,
  collapseLabel = "Collapse sidebar",
  defaultOpen = true,
  errorItemLabel = "Lorem Ipsum",
  expandLabel = "Expand sidebar",
  items = defaultItems,
  logoLabel = "adesso",
  navLabel = "Primary navigation",
  onOpenChange,
  open,
  profile,
  showProfile = true,
  theme = "light",
  ...props
}: SidebarProps) {
  const sidebar = useSidebarState({ defaultOpen, onOpenChange, open });
  const classes = ["ads-sidebar", className].filter(Boolean).join(" ");
  const logoVariant = sidebar.open
    ? theme === "dark" ? "white" : "original"
    : theme === "dark" ? "favicon-white" : "favicon-original";

  return (
    <aside
      {...props}
      className={classes}
      data-state={sidebar.open ? "open" : "closed"}
      data-theme={theme}
    >
      <div className="ads-sidebar-top">
        <div className="ads-sidebar-logo">
          <Logo variant={logoVariant} label={logoLabel} />
        </div>
        <nav className="ads-sidebar-navigation" aria-label={navLabel}>
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              active={item.active}
              badge={item.badge}
              disabled={item.disabled}
              href={item.href}
              icon={item.icon}
              showArrow={item.showArrow}
              showText={sidebar.open}
              theme={theme}
              aria-label={!sidebar.open && typeof item.label === "string" ? item.label : undefined}
            >
              {item.label}
            </SidebarItem>
          ))}
        </nav>
      </div>

      <div className="ads-sidebar-bottom">
        {showProfile ? (
          <SidebarProfile
            initials={profile?.initials}
            name={profile?.name}
            role={profile?.role}
            showIdentity={sidebar.open}
            theme={theme}
          />
        ) : null}
        <SidebarItem
          error
          href="#sidebar-error"
          showText={sidebar.open}
          theme={theme}
          aria-label={!sidebar.open && typeof errorItemLabel === "string" ? errorItemLabel : undefined}
        >
          {errorItemLabel}
        </SidebarItem>
        <div className="ads-sidebar-action">
          <button
            className="ads-sidebar-toggle"
            type="button"
            aria-expanded={sidebar.open}
            aria-label={sidebar.open ? collapseLabel : expandLabel}
            onClick={sidebar.toggle}
          >
            {sidebar.open ? <ChevronLeftIcon size="md" /> : <ChevronRightIcon size="md" />}
          </button>
        </div>
      </div>
    </aside>
  );
}
