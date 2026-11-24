import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributeAnchorTarget,
  type HTMLAttributes,
  type MouseEvent,
  type Ref,
  type ReactNode
} from "react";

export interface BreadcrumbItemProps
  extends Omit<HTMLAttributes<HTMLElement>, "aria-current" | "children"> {
  children: ReactNode;
  current?: boolean;
  disabled?: boolean;
  href?: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const BreadcrumbItem = forwardRef<HTMLElement, BreadcrumbItemProps>(
  function BreadcrumbItem(
    {
      children,
      className,
      current = false,
      disabled = false,
      href,
      onClick,
      rel,
      target,
      ...props
    },
    ref
  ) {
    const state = disabled ? "disabled" : current ? "active" : "default";
    const classes = ["ads-breadcrumb-item", className].filter(Boolean).join(" ");
    const isNonNavigating = current || disabled;

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
    };

    if (isNonNavigating) {
      return (
        <span
          {...props}
          ref={ref as Ref<HTMLSpanElement>}
          className={classes}
          data-state={state}
          aria-current={current ? "page" : undefined}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : props.tabIndex}
        >
          {children}
        </span>
      );
    }

    return (
      <a
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        ref={ref as Ref<HTMLAnchorElement>}
        className={classes}
        data-state={state}
        href={href}
        rel={rel}
        target={target}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
);
