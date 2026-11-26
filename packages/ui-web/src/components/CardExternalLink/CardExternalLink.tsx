import type { HTMLAttributes } from "react";
import { Button } from "../Button/Button";

export type CardExternalLinkState = "default" | "hover";

export interface CardExternalLinkProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  bodyText?: string;
  onAction?: () => void;
  showButton?: boolean;
  state?: CardExternalLinkState;
  title?: string;
}

export function CardExternalLink({
  bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  className,
  onAction,
  showButton = true,
  state = "default",
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
  ...props
}: CardExternalLinkProps) {
  const classNames = ["ads-card-external-link", `state-${state}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      {...props}
      className={classNames}
      data-state={state}
    >
      <div className="ads-card-external-link-content">
        <div className="ads-card-external-link-copy">
          <h2>{title}</h2>
          <p>{bodyText}</p>
        </div>
        {showButton ? (
          <Button
            className="ads-card-external-link-action"
            onClick={onAction}
            size="small"
            variant="secondary"
          >
            Button
          </Button>
        ) : null}
      </div>
    </article>
  );
}
