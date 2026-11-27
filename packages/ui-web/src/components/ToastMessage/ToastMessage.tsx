import { AlertTriangleIcon, CheckIcon, InfoIcon, XCircleIcon, XIcon } from "@ads/icons";
import type { HTMLAttributes } from "react";
import { Button } from "../Button/Button";

export type ToastMessageType = "success" | "warning" | "error" | "info";
export type ToastMessageDevice = "desktop" | "mobile";

export interface ToastMessageProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  buttonLabel?: string;
  description?: string;
  device?: ToastMessageDevice;
  dismissLabel?: string;
  onButtonClick?: () => void;
  onDismiss?: () => void;
  showButton?: boolean;
  showDescription?: boolean;
  title?: string;
  type?: ToastMessageType;
}

const defaultTitles: Record<ToastMessageType, string> = {
  success: "Success message",
  warning: "Warning message",
  error: "Error message",
  info: "Info message"
};

const icons = {
  success: CheckIcon,
  warning: AlertTriangleIcon,
  error: XCircleIcon,
  info: InfoIcon
} as const;

export function ToastMessage({
  buttonLabel = "Button",
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  device = "desktop",
  dismissLabel = "Dismiss message",
  onButtonClick,
  onDismiss,
  showButton = true,
  showDescription = true,
  title,
  type = "success",
  ...props
}: ToastMessageProps) {
  const isMobile = device === "mobile";
  const iconSize = isMobile ? "sm" : "md";
  const StatusIcon = icons[type];
  const classNames = ["ads-toast-message", `type-${type}`, `device-${device}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      role={type === "error" || type === "warning" ? "alert" : "status"}
      {...props}
      className={classNames}
      data-device={device}
      data-type={type}
    >
      <div className="ads-toast-message-row">
        <div className="ads-toast-message-main">
          <span className="ads-toast-message-icon">
            <StatusIcon size={iconSize} />
          </span>
          <div className="ads-toast-message-copy">
            <p className="ads-toast-message-title">{title ?? defaultTitles[type]}</p>
            {showDescription ? <p className="ads-toast-message-description">{description}</p> : null}
          </div>
        </div>
        <button
          aria-label={dismissLabel}
          className="ads-toast-message-dismiss"
          onClick={onDismiss}
          type="button"
        >
          <XIcon size={iconSize} />
        </button>
      </div>
      {showButton ? (
        <div className="ads-toast-message-button">
          <Button onClick={onButtonClick} size={isMobile ? "small" : "medium"} variant="ghost">
            {buttonLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
