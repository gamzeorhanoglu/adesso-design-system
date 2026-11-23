import type { HTMLAttributes } from "react";

export type AvatarSize = "large" | "medium" | "small";
export type AvatarShape = "circle" | "square";

interface SharedAvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  "aria-label": string;
  shape?: AvatarShape;
  showBadge?: boolean;
  size?: AvatarSize;
}

interface ImageAvatarProps extends SharedAvatarProps {
  initials?: never;
  src: string;
  type: "image";
}

interface InitialAvatarProps extends SharedAvatarProps {
  initials: string;
  src?: never;
  type?: "initial";
}

export type AvatarProps = ImageAvatarProps | InitialAvatarProps;

export function Avatar({
  "aria-label": ariaLabel,
  className,
  shape = "circle",
  showBadge = false,
  size = "medium",
  ...props
}: AvatarProps) {
  const rootClassName = ["ads-avatar", `size-${size}`, `shape-${shape}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={rootClassName} role="img" aria-label={ariaLabel}>
      {props.type === "image" ? (
        <img className="ads-avatar-image" src={props.src} alt="" />
      ) : (
        <span className="ads-avatar-initials" aria-hidden="true">{props.initials}</span>
      )}
      {showBadge ? <span className="ads-avatar-badge" aria-hidden="true" /> : null}
    </span>
  );
}
