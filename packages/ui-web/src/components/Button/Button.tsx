import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "destructive"
  | "ghost"
  | "icon-only";

export type ButtonSize = "large" | "medium" | "small";

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

interface SharedButtonProps extends NativeButtonProps {
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

interface IconOnlyButtonProps extends SharedButtonProps {
  variant: "icon-only";
  "aria-label": string;
  children: ReactNode;
  leadingIcon?: never;
  trailingIcon?: never;
}

interface TextButtonProps extends SharedButtonProps {
  variant?: Exclude<ButtonVariant, "icon-only">;
  children: ReactNode;
}

export type ButtonProps = IconOnlyButtonProps | TextButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "medium",
    leadingIcon,
    trailingIcon,
    className,
    children,
    type = "button",
    ...props
  },
  ref
) {
  const classes = [
    "ads-btn",
    variant,
    `size-${size}`,
    leadingIcon && "has-leading-icon",
    trailingIcon && "has-trailing-icon",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {leadingIcon ? <span className="ads-btn-icon">{leadingIcon}</span> : null}
      {variant === "icon-only" ? children : <span>{children}</span>}
      {trailingIcon ? <span className="ads-btn-icon">{trailingIcon}</span> : null}
    </button>
  );
});

