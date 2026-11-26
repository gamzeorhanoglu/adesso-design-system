import type { HTMLAttributes } from "react";
import { Button } from "../Button/Button";
import cardImage from "../../assets/card-content-image-1.jpeg";

export type CardContentDevice = "desktop" | "mobile";
export type CardContentState = "default" | "hover" | "disabled";

export interface CardContentProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  bodyText?: string;
  buttonLabel?: string;
  device?: CardContentDevice;
  imageAlt?: string;
  imageSrc?: string;
  onAction?: () => void;
  showButton?: boolean;
  showImage?: boolean;
  showText?: boolean;
  state?: CardContentState;
  title?: string;
}

export function CardContent({
  bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  buttonLabel = "Button",
  className,
  device = "desktop",
  imageAlt = "",
  imageSrc = cardImage,
  onAction,
  showButton = true,
  showImage = true,
  showText = true,
  state = "default",
  title = "Lorem Ipsum",
  ...props
}: CardContentProps) {
  const isDisabled = state === "disabled";
  const classNames = ["ads-card-content", `device-${device}`, `state-${state}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      {...props}
      aria-disabled={isDisabled || undefined}
      className={classNames}
      data-device={device}
      data-state={state}
    >
      {showImage ? (
        <div className="ads-card-content-image">
          <img src={imageSrc} alt={imageAlt} />
          {isDisabled ? <span className="ads-card-content-image-overlay" aria-hidden="true" /> : null}
        </div>
      ) : null}
      <div className="ads-card-content-body">
        <div className="ads-card-content-copy">
          <h2>{title}</h2>
          {showText ? <p>{bodyText}</p> : null}
        </div>
        {showButton ? (
          <Button
            className="ads-card-content-action"
            disabled={isDisabled}
            onClick={onAction}
            size={device === "desktop" ? "large" : "medium"}
            variant="ghost"
          >
            {buttonLabel}
          </Button>
        ) : null}
      </div>
    </article>
  );
}
