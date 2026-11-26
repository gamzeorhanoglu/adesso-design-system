import type { HTMLAttributes } from "react";

export interface CardStatsProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  caption?: string;
  value?: string;
}

export function CardStats({
  caption = "LOREM IPSUM",
  className,
  label = "LOREM IPSUM",
  value = "999.99",
  ...props
}: CardStatsProps) {
  const classNames = ["ads-card-stats", className].filter(Boolean).join(" ");

  return (
    <article {...props} className={classNames}>
      <p className="ads-card-stats-label">{label}</p>
      <p className="ads-card-stats-value">{value}</p>
      <p className="ads-card-stats-caption">{caption}</p>
    </article>
  );
}
