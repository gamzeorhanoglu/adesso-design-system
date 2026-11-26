import type { HTMLAttributes } from "react";

export type CardNewsBlogType = "blog" | "news";
export type CardNewsBlogState = "default" | "hover";

export interface CardNewsBlogProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  date?: string;
  showText?: boolean;
  state?: CardNewsBlogState;
  title?: string;
  type?: CardNewsBlogType;
}

export function CardNewsBlog({
  className,
  date = "09/09/2026",
  showText = true,
  state = "default",
  title = "Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  type = "blog",
  ...props
}: CardNewsBlogProps) {
  const classNames = ["ads-card-news-blog", `type-${type}`, `state-${state}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <article {...props} className={classNames} data-state={state} data-type={type}>
      <div className="ads-card-news-blog-content">
        <div className="ads-card-news-blog-copy">
          <div className="ads-card-news-blog-meta">
            {showText ? <span>{type === "blog" ? "BLOG" : "NEWS"}</span> : null}
            <span className="ads-card-news-blog-date">{date}</span>
          </div>
          <h2>{title}</h2>
        </div>
      </div>
    </article>
  );
}
