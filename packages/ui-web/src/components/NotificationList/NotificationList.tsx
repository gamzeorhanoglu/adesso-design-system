import {
  BellIcon,
  CalendarIcon,
  ChevronUpIcon,
  MailIcon,
  MailOpenIcon,
  MoreVerticalIcon,
  TrashIcon
} from "@ads/icons";
import type { HTMLAttributes, ReactNode } from "react";
import { useNotificationListActions } from "../../hooks/useNotificationListActions";
import { Button } from "../Button/Button";

export type NotificationListDevice = "desktop" | "mobile";
export type NotificationListState = "default" | "open" | "read" | "read-open";

export interface NotificationListProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  buttonLabel?: string;
  closeActionsLabel?: string;
  date?: string;
  defaultOpen?: boolean;
  deleteLabel?: string;
  description?: string;
  device?: NotificationListDevice;
  icon?: ReactNode;
  markAsReadLabel?: string;
  markAsUnreadLabel?: string;
  moreLabel?: string;
  onButtonClick?: () => void;
  onDelete?: () => void;
  onOpenChange?: (open: boolean) => void;
  onToggleRead?: () => void;
  open?: boolean;
  read?: boolean;
  showButton?: boolean;
  showDescription?: boolean;
  showIcon?: boolean;
  title?: string;
}

export function NotificationList({
  buttonLabel = "Button",
  className,
  closeActionsLabel = "Close actions",
  date = "15.10.2026",
  defaultOpen = false,
  deleteLabel = "Delete notification",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  device = "desktop",
  icon,
  markAsReadLabel = "Mark as read",
  markAsUnreadLabel = "Mark as unread",
  moreLabel = "Show actions",
  onButtonClick,
  onDelete,
  onOpenChange,
  onToggleRead,
  open,
  read = false,
  showButton = true,
  showDescription = true,
  showIcon = true,
  title = "Lorem ipsum dolor sit amet",
  ...props
}: NotificationListProps) {
  const isMobile = device === "mobile";
  const actions = useNotificationListActions({
    defaultOpen,
    onOpenChange,
    open,
    swipeEnabled: isMobile
  });
  const state: NotificationListState = `${read ? "read" : "default"}${actions.open ? "-open" : ""}`
    .replace("default-open", "open") as NotificationListState;
  const classNames = [
    "ads-notification-list",
    `device-${device}`,
    `state-${state}`,
    read ? "is-read" : "is-unread",
    className
  ]
    .filter(Boolean)
    .join(" ");
  const toggleReadLabel = read ? markAsUnreadLabel : markAsReadLabel;

  return (
    <article
      {...props}
      {...(isMobile ? actions.rootHandlers : {})}
      className={classNames}
      data-device={device}
      data-state={state}
      tabIndex={isMobile ? 0 : props.tabIndex}
    >
      <div className="ads-notification-list-content">
        <div className="ads-notification-list-row">
          {showIcon ? (
            <span className="ads-notification-list-icon">
              {icon ?? <BellIcon size="md" />}
              {!icon && !read ? <span aria-hidden="true" className="ads-notification-list-dot" /> : null}
            </span>
          ) : null}
          <div className="ads-notification-list-body">
            <div className="ads-notification-list-heading">
              <div className="ads-notification-list-copy">
                <p className="ads-notification-list-title">{title}</p>
                {showDescription ? <p className="ads-notification-list-description">{description}</p> : null}
              </div>
              {!isMobile ? (
                <div className="ads-notification-list-actions">
                  {actions.open ? (
                    <>
                      <Button
                        aria-expanded
                        aria-label={closeActionsLabel}
                        className="ads-notification-list-action is-pressed"
                        onClick={actions.toggle}
                        size="small"
                        variant="icon-only"
                      >
                        <ChevronUpIcon size="sm" />
                      </Button>
                      <Button
                        aria-label={toggleReadLabel}
                        className="ads-notification-list-action is-primary"
                        onClick={onToggleRead}
                        size="small"
                        variant="icon-only"
                      >
                        <MailOpenIcon size="sm" />
                      </Button>
                      <Button
                        aria-label={deleteLabel}
                        className="ads-notification-list-action is-danger"
                        onClick={onDelete}
                        size="small"
                        variant="icon-only"
                      >
                        <TrashIcon size="sm" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      aria-expanded={false}
                      aria-label={moreLabel}
                      onClick={actions.toggle}
                      size="small"
                      variant="icon-only"
                    >
                      <MoreVerticalIcon size="sm" />
                    </Button>
                  )}
                </div>
              ) : null}
            </div>
            {showDescription ? (
              <div className="ads-notification-list-date">
                {showIcon ? <CalendarIcon size="xs" /> : null}
                <span>{date}</span>
              </div>
            ) : null}
          </div>
        </div>
        {showButton ? (
          <div className="ads-notification-list-button">
            <Button
              disabled={read}
              onClick={onButtonClick}
              size={isMobile ? "small" : "medium"}
              variant="ghost"
            >
              {buttonLabel}
            </Button>
          </div>
        ) : null}
      </div>
      {isMobile && actions.open ? (
        <div className="ads-notification-list-slides">
          <button
            aria-label={toggleReadLabel}
            className="ads-notification-list-slide is-primary"
            onClick={onToggleRead}
            type="button"
          >
            {read ? <MailIcon size="md" /> : <MailOpenIcon size="md" />}
          </button>
          <button
            aria-label={deleteLabel}
            className="ads-notification-list-slide is-danger"
            onClick={onDelete}
            type="button"
          >
            <TrashIcon size="md" />
          </button>
        </div>
      ) : null}
    </article>
  );
}
