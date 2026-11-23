import {
  forwardRef,
  useMemo,
  type HTMLAttributes
} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@ads/icons";
import {
  useCalendarState,
  type CalendarRange,
  type CalendarSelectionMode
} from "../../hooks/useCalendarState";
import { CalendarItem } from "../CalendarItem/CalendarItem";
import { Dropdown } from "../Dropdown/Dropdown";

export type CalendarPeriod = "day" | "month";

export interface CalendarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  defaultDisplayedMonth?: Date;
  defaultRange?: CalendarRange;
  defaultValue?: Date;
  displayedMonth?: Date;
  fromYear?: number;
  isDateDisabled?: (date: Date) => boolean;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  onDisplayedMonthChange?: (date: Date) => void;
  onRangeChange?: (range: CalendarRange) => void;
  onValueChange?: (date: Date) => void;
  period?: CalendarPeriod;
  range?: CalendarRange;
  selectionMode?: CalendarSelectionMode;
  toYear?: number;
  value?: Date;
  weekStartsOn?: 0 | 1;
}

const sameDay = (left: Date | undefined, right: Date) =>
  Boolean(
    left &&
      left.getFullYear() === right.getFullYear() &&
      left.getMonth() === right.getMonth() &&
      left.getDate() === right.getDate()
  );

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  function Calendar(
    {
      className,
      defaultDisplayedMonth,
      defaultRange,
      defaultValue,
      displayedMonth,
      fromYear,
      isDateDisabled,
      locale = "en-US",
      maxDate,
      minDate,
      onDisplayedMonthChange,
      onRangeChange,
      onValueChange,
      period = "day",
      range,
      selectionMode = "single",
      toYear,
      value,
      weekStartsOn = 0,
      ...props
    },
    ref
  ) {
    const state = useCalendarState({
      defaultDisplayedMonth,
      defaultRange,
      defaultValue,
      displayedMonth,
      isDateDisabled,
      maxDate,
      minDate,
      onDisplayedMonthChange,
      onRangeChange,
      onValueChange,
      range,
      selectionMode,
      value,
      weekStartsOn
    });
    const year = state.viewDate.getFullYear();
    const month = state.viewDate.getMonth();
    const resolvedFromYear = fromYear ?? year - 10;
    const resolvedToYear = toYear ?? year + 10;
    const monthFormatter = useMemo(
      () => new Intl.DateTimeFormat(locale, { month: "short" }),
      [locale]
    );
    const monthLongFormatter = useMemo(
      () => new Intl.DateTimeFormat(locale, { month: "long" }),
      [locale]
    );
    const fullDateFormatter = useMemo(
      () => new Intl.DateTimeFormat(locale, { dateStyle: "full" }),
      [locale]
    );
    const weekdayFormatter = useMemo(
      () => new Intl.DateTimeFormat(locale, { weekday: "short" }),
      [locale]
    );
    const monthOptions = useMemo(
      () =>
        Array.from({ length: 12 }, (_, index) => ({
          label: monthFormatter.format(new Date(2024, index, 1)),
          value: String(index)
        })),
      [monthFormatter]
    );
    const yearOptions = useMemo(
      () =>
        Array.from(
          { length: resolvedToYear - resolvedFromYear + 1 },
          (_, index) => {
            const optionYear = resolvedFromYear + index;
            return { label: String(optionYear), value: String(optionYear) };
          }
        ),
      [resolvedFromYear, resolvedToYear]
    );
    const weekdays = useMemo(
      () =>
        Array.from({ length: 7 }, (_, index) => {
          const day = (weekStartsOn + index) % 7;
          return weekdayFormatter.format(new Date(2024, 0, 7 + day));
        }),
      [weekStartsOn, weekdayFormatter]
    );
    const classes = ["ads-calendar", className].filter(Boolean).join(" ");

    const changeYear = (values: string[]) => {
      const nextYear = Number(values[0]);
      if (!Number.isNaN(nextYear)) {
        state.commitDisplayedMonth(new Date(nextYear, month, 1));
      }
    };

    return (
      <div
        {...props}
        ref={ref}
        className={classes}
        data-period={period}
        aria-label={props["aria-label"] ?? "Calendar"}
      >
        <div className="ads-calendar-header">
          <button
            type="button"
            className="ads-calendar-nav"
            aria-label={period === "day" ? "Previous month" : "Previous year"}
            onClick={period === "day" ? state.previous : state.previousYear}
          >
            <ChevronLeftIcon size="md" />
          </button>

          <div className="ads-calendar-controls">
            {period === "day" ? (
              <Dropdown
                className="ads-calendar-month-select"
                label="Month"
                listLabel="Months"
                multiple={false}
                options={monthOptions}
                showInfo={false}
                showLabel={false}
                showSupportingText={false}
                value={[String(month)]}
                onValueChange={(values) => {
                  const nextMonth = Number(values[0]);
                  if (!Number.isNaN(nextMonth)) {
                    state.commitDisplayedMonth(new Date(year, nextMonth, 1));
                  }
                }}
              />
            ) : null}
            <Dropdown
              className="ads-calendar-year-select"
              label="Year"
              listLabel="Years"
              multiple={false}
              options={yearOptions}
              showInfo={false}
              showLabel={false}
              showSupportingText={false}
              value={[String(year)]}
              onValueChange={changeYear}
            />
          </div>

          <button
            type="button"
            className="ads-calendar-nav"
            aria-label={period === "day" ? "Next month" : "Next year"}
            onClick={period === "day" ? state.next : state.nextYear}
          >
            <ChevronRightIcon size="md" />
          </button>
        </div>

        {period === "day" ? (
          <div className="ads-calendar-table">
            <div className="ads-calendar-weekdays" role="row">
              {weekdays.map((weekday) => (
                <span key={weekday} role="columnheader">{weekday}</span>
              ))}
            </div>
            <div
              ref={state.gridRef}
              className="ads-calendar-days"
              role="grid"
              aria-label={`${monthLongFormatter.format(state.viewDate)} ${year}`}
            >
              {state.days.map((day) => (
                <CalendarItem
                  key={day.date.toISOString()}
                  aria-label={fullDateFormatter.format(day.date)}
                  data-date={[
                    day.date.getFullYear(),
                    String(day.date.getMonth() + 1).padStart(2, "0"),
                    String(day.date.getDate()).padStart(2, "0")
                  ].join("-")}
                  disabled={day.disabled}
                  hidden={day.hidden}
                  inRange={day.inRange}
                  label={day.date.getDate()}
                  selected={day.selected}
                  tabIndex={sameDay(state.focusedDate, day.date) ? 0 : -1}
                  onKeyDown={(event) => state.handleDayKeyDown(event, day.date)}
                  onSelect={() => state.commitValue(day.date)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            className="ads-calendar-months"
            role="grid"
            aria-label={`Months in ${year}`}
          >
            {Array.from({ length: 12 }, (_, index) => {
              const date = new Date(year, index, 1);
              return (
                <CalendarItem
                  key={index}
                  className="ads-calendar-month"
                  aria-label={`${monthLongFormatter.format(date)} ${year}`}
                  label={monthLongFormatter.format(date)}
                  selected={state.value?.getFullYear() === year && state.value.getMonth() === index}
                  onSelect={() => state.selectMonth(index)}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

export type { CalendarRange, CalendarSelectionMode };
