import { ChevronRightIcon } from "@ads/icons";
import {
  Children,
  forwardRef,
  type HTMLAttributes,
  type ReactNode
} from "react";

export interface BreadcrumbProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  "aria-label"?: string;
  children: ReactNode;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb(
    { "aria-label": ariaLabel = "Breadcrumb", children, className, ...props },
    ref
  ) {
    const items = Children.toArray(children);
    const classes = ["ads-breadcrumb", className].filter(Boolean).join(" ");

    return (
      <nav {...props} ref={ref} className={classes} aria-label={ariaLabel}>
        <ol className="ads-breadcrumb-list">
          {items.map((item, index) => (
            <li className="ads-breadcrumb-entry" key={index}>
              {item}
              {index < items.length - 1 ? (
                <span className="ads-breadcrumb-separator" aria-hidden="true">
                  <ChevronRightIcon size="sm" />
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);
