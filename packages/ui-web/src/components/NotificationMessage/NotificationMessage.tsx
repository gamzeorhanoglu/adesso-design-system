import { BellIcon, XIcon } from "@ads/icons";
import type { HTMLAttributes } from "react";
import { Button } from "../Button/Button";

export type NotificationMessageDevice = "desktop" | "mobile";
export type NotificationMessageState = "default" | "hover";

export interface NotificationMessageProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  buttonLabel?: string;
  description?: string;
  device?: NotificationMessageDevice;
  dismissLabel?: string;
  onButtonClick?: () => void;
  onDismiss?: () => void;
  showDescription?: boolean;
  state?: NotificationMessageState;
  title?: string;
}

export function NotificationMessage({
  buttonLabel = "Button",
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  device = "desktop",
  dismissLabel = "Dismiss notification",
  onButtonClick,
  onDismiss,
  showDescription = true,
  state = "default",
  title = "Lorem ipsum dolor sit amet",
  ...props
}: NotificationMessageProps) {
  const isMobile = device === "mobile";
  const iconSize = isMobile ? "sm" : "md";
  const classNames = ["ads-notification-message", `device-${device}`, `state-${state}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <article {...props} className={classNames} data-device={device} data-state={state}>
      <div className="ads-notification-message-row">
        <span className="ads-notification-message-icon">
          <BellIcon size={iconSize} />
        </span>
        <div className="ads-notification-message-copy">
          <p className="ads-notification-message-title">{title}</p>
          {showDescription ? <p className="ads-notification-message-description">{description}</p> : null}
        </div>
        <button
          aria-label={dismissLabel}
          className="ads-notification-message-dismiss"
          onClick={onDismiss}
          type="button"
        >
          <XIcon size={iconSize} />
        </button>
      </div>
      <div className="ads-notification-message-button">
        <Button onClick={onButtonClick} size={isMobile ? "small" : "medium"} variant="ghost">
          {buttonLabel}
        </Button>
      </div>
    </article>
  );
}
