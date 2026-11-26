import { ArrowDownIcon, ArrowUpRightIcon, MoreVerticalIcon, UserIcon } from "@ads/icons";
import type { HTMLAttributes } from "react";

export type CardKpiAmount = "single" | "multiple";

export interface CardKpiMetric {
  decrease?: string;
  description?: string;
  increase?: string;
  label?: string;
  value?: string;
}

export interface CardKpiProps extends HTMLAttributes<HTMLElement> {
  amount?: CardKpiAmount;
  metrics?: CardKpiMetric[];
  moreLabel?: string;
  onMoreClick?: (index: number) => void;
  showDecrease?: boolean;
  showIncrease?: boolean;
  showMore?: boolean;
}

const defaultMetric: Required<CardKpiMetric> = {
  decrease: "45%",
  description: "Lorem ipsum dolor sit",
  increase: "45%",
  label: "Lorem ipsum",
  value: "99+ Lorem"
};

export function CardKpi({
  amount = "single",
  className,
  metrics,
  moreLabel = "More options",
  onMoreClick,
  showDecrease = true,
  showIncrease = true,
  showMore = true,
  ...props
}: CardKpiProps) {
  const count = amount === "multiple" ? 3 : 1;
  const items = Array.from({ length: count }, (_, index) => ({
    ...defaultMetric,
    ...metrics?.[index]
  }));
  const classNames = ["ads-card-kpi", `amount-${amount}`, className].filter(Boolean).join(" ");

  return (
    <article {...props} className={classNames} data-amount={amount}>
      {items.map((metric, index) => (
        <div className="ads-card-kpi-item" key={index}>
          <div className="ads-card-kpi-header">
            <div className="ads-card-kpi-label">
              <UserIcon size="sm" />
              <p>{metric.label}</p>
            </div>
            {showMore ? (
              <button
                aria-label={moreLabel}
                className="ads-card-kpi-more"
                onClick={() => onMoreClick?.(index)}
                type="button"
              >
                <MoreVerticalIcon size="sm" />
              </button>
            ) : null}
          </div>
          <div className="ads-card-kpi-body">
            <p className="ads-card-kpi-value">{metric.value}</p>
            <div className="ads-card-kpi-meta">
              <p className="ads-card-kpi-description">{metric.description}</p>
              {showIncrease ? (
                <span className="ads-card-kpi-change is-increase">
                  <ArrowUpRightIcon size="sm" />
                  <span>{metric.increase}</span>
                </span>
              ) : null}
              {showDecrease ? (
                <span className="ads-card-kpi-change is-decrease">
                  <ArrowDownIcon size="sm" />
                  <span>{metric.decrease}</span>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}
