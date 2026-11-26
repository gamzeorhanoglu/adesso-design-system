import { XIcon } from "@ads/icons";
import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button/Button";
import { TabGroup, type TabGroupItem } from "../TabGroup/TabGroup";

export interface NotificationGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  children?: ReactNode;
  closeLabel?: string;
  footerLabel?: string;
  markAllReadLabel?: string;
  onClose?: () => void;
  onFooterClick?: () => void;
  onMarkAllRead?: () => void;
  onSelectedTabChange?: (id: string) => void;
  selectedTabId?: string;
  showTab?: boolean;
  showUnreadInformation?: boolean;
  tabs?: readonly TabGroupItem[];
  title?: string;
  unreadText?: string;
}

const defaultTabs: readonly TabGroupItem[] = [
  { id: "all", label: "Tümü" },
  { id: "unread", label: "Okunmamış (3)" }
];

export function NotificationGroup({
  children,
  className,
  closeLabel = "Close notifications",
  footerLabel = "Tüm Bildirimleri Gör",
  markAllReadLabel = "Tümünü okundu işaretle",
  onClose,
  onFooterClick,
  onMarkAllRead,
  onSelectedTabChange,
  selectedTabId,
  showTab = true,
  showUnreadInformation = true,
  tabs = defaultTabs,
  title = "Bildirimler",
  unreadText = "3 okunmamış bildirim",
  ...props
}: NotificationGroupProps) {
  const classNames = ["ads-notification-group", className].filter(Boolean).join(" ");

  return (
    <div {...props} aria-label={props["aria-label"] ?? title} className={classNames} role="region">
      <header className="ads-notification-group-header">
        <h2>{title}</h2>
        <button
          aria-label={closeLabel}
          className="ads-notification-group-close"
          onClick={onClose}
          type="button"
        >
          <XIcon size="md" />
        </button>
      </header>
      {showUnreadInformation ? (
        <div className="ads-notification-group-unread">
          <p>{unreadText}</p>
          <Button onClick={onMarkAllRead} size="small" variant="outline">
            {markAllReadLabel}
          </Button>
        </div>
      ) : null}
      {showTab ? (
        <div className="ads-notification-group-tabs">
          <TabGroup
            aria-label={title}
            defaultSelectedId={tabs[0]?.id}
            items={tabs}
            onSelectedIdChange={onSelectedTabChange}
            selectedId={selectedTabId}
          />
        </div>
      ) : null}
      <div className="ads-notification-group-list">{children}</div>
      <footer className="ads-notification-group-footer">
        <Button onClick={onFooterClick} size="medium" variant="ghost">
          {footerLabel}
        </Button>
      </footer>
    </div>
  );
}

export interface NotificationGroupHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function NotificationGroupHeading({ children, className, ...props }: NotificationGroupHeadingProps) {
  const classNames = ["ads-notification-group-heading", className].filter(Boolean).join(" ");
  return (
    <h3 {...props} className={classNames}>
      {children}
    </h3>
  );
}
