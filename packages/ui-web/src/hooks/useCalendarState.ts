import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent
} from "react";

export type CalendarSelectionMode = "single" | "range";

export interface CalendarRange {
  start: Date | null;
  end: Date | null;
}

export interface CalendarDay {
  date: Date;
  disabled: boolean;
  hidden: boolean;
  inRange: boolean;
  selected: boolean;
}

export interface UseCalendarStateOptions {
  defaultDisplayedMonth?: Date;
  defaultRange?: CalendarRange;
  defaultValue?: Date;
  displayedMonth?: Date;
  isDateDisabled?: (date: Date) => boolean;
  maxDate?: Date;
  minDate?: Date;
  onDisplayedMonthChange?: (date: Date) => void;
  onRangeChange?: (range: CalendarRange) => void;
  onValueChange?: (date: Date) => void;
  range?: CalendarRange;
  selectionMode?: CalendarSelectionMode;
  value?: Date;
  weekStartsOn?: 0 | 1;
}

const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const startOfMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1);

const sameDay = (left: Date | null | undefined, right: Date | null | undefined) =>
  Boolean(
    left &&
      right &&
      left.getFullYear() === right.getFullYear() &&
      left.getMonth() === right.getMonth() &&
      left.getDate() === right.getDate()
  );

const addDays = (date: Date, amount: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);

const addMonths = (date: Date, amount: number) =>
  new Date(date.getFullYear(), date.getMonth() + amount, 1);

const dateKey = (date: Date) =>
  [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");

export function useCalendarState({
  defaultDisplayedMonth,
  defaultRange = { start: null, end: null },
  defaultValue,
  displayedMonth,
  isDateDisabled,
  maxDate,
  minDate,
  onDisplayedMonthChange,
  onRangeChange,
  onValueChange,
  range,
  selectionMode = "single",
  value,
  weekStartsOn = 0
}: UseCalendarStateOptions) {
  const initialDate = value ?? defaultValue ?? new Date();
  const [internalValue, setInternalValue] = useState<Date | undefined>(defaultValue);
  const [internalRange, setInternalRange] = useState<CalendarRange>(defaultRange);
  const [internalDisplayedMonth, setInternalDisplayedMonth] = useState(() =>
    startOfMonth(defaultDisplayedMonth ?? initialDate)
  );
  const [focusedDate, setFocusedDate] = useState(() => startOfDay(initialDate));
  const gridRef = useRef<HTMLDivElement>(null);
  const shouldMoveDomFocus = useRef(false);

  const resolvedValue = value ?? internalValue;
  const resolvedRange = range ?? internalRange;
  const resolvedDisplayedMonth = startOfMonth(displayedMonth ?? internalDisplayedMonth);

  const commitDisplayedMonth = (date: Date) => {
    const next = startOfMonth(date);
    if (displayedMonth === undefined) setInternalDisplayedMonth(next);
    onDisplayedMonthChange?.(next);
  };

  const isUnavailable = (date: Date) => {
    const normalized = startOfDay(date);
    return Boolean(
      (minDate && normalized < startOfDay(minDate)) ||
        (maxDate && normalized > startOfDay(maxDate)) ||
        isDateDisabled?.(normalized)
    );
  };

  const commitValue = (date: Date) => {
    const next = startOfDay(date);
    if (isUnavailable(next)) return;

    if (selectionMode === "range") {
      let nextRange: CalendarRange;
      if (!resolvedRange.start || resolvedRange.end) {
        nextRange = { start: next, end: null };
      } else if (next < resolvedRange.start) {
        nextRange = { start: next, end: resolvedRange.start };
      } else {
        nextRange = { start: resolvedRange.start, end: next };
      }
      if (range === undefined) setInternalRange(nextRange);
      onRangeChange?.(nextRange);
    } else {
      if (value === undefined) setInternalValue(next);
      onValueChange?.(next);
    }
    setFocusedDate(next);
  };

  const days = useMemo<CalendarDay[]>(() => {
    const year = resolvedDisplayedMonth.getFullYear();
    const month = resolvedDisplayedMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const leadingCount = (firstDay.getDay() - weekStartsOn + 7) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cellCount = Math.ceil((leadingCount + daysInMonth) / 7) * 7;
    const rangeStart = resolvedRange.start && startOfDay(resolvedRange.start);
    const rangeEnd = resolvedRange.end && startOfDay(resolvedRange.end);

    return Array.from({ length: cellCount }, (_, index) => {
      const date = new Date(year, month, index - leadingCount + 1);
      const beforeMonth = date.getMonth() !== month && date < firstDay;
      const afterMonth = date.getMonth() !== month && date > firstDay;
      const selected =
        selectionMode === "range"
          ? sameDay(date, rangeStart) || sameDay(date, rangeEnd)
          : sameDay(date, resolvedValue);
      const inRange = Boolean(
        selectionMode === "range" &&
          rangeStart &&
          rangeEnd &&
          date > rangeStart &&
          date < rangeEnd
      );

      return {
        date,
        hidden: beforeMonth,
        disabled: afterMonth || isUnavailable(date),
        selected,
        inRange
      };
    });
  }, [
    isDateDisabled,
    maxDate,
    minDate,
    resolvedDisplayedMonth,
    resolvedRange.end,
    resolvedRange.start,
    resolvedValue,
    selectionMode,
    weekStartsOn
  ]);

  useEffect(() => {
    if (!shouldMoveDomFocus.current) return;
    shouldMoveDomFocus.current = false;
    const target = gridRef.current?.querySelector<HTMLElement>(
      `[data-date="${dateKey(focusedDate)}"]`
    );
    target?.focus();
  }, [focusedDate, resolvedDisplayedMonth]);

  const moveFocus = (date: Date) => {
    shouldMoveDomFocus.current = true;
    setFocusedDate(date);
    if (
      date.getFullYear() !== resolvedDisplayedMonth.getFullYear() ||
      date.getMonth() !== resolvedDisplayedMonth.getMonth()
    ) {
      commitDisplayedMonth(date);
    }
  };

  const handleDayKeyDown = (event: KeyboardEvent<HTMLButtonElement>, date: Date) => {
    let next: Date | undefined;
    if (event.key === "ArrowLeft") next = addDays(date, -1);
    if (event.key === "ArrowRight") next = addDays(date, 1);
    if (event.key === "ArrowUp") next = addDays(date, -7);
    if (event.key === "ArrowDown") next = addDays(date, 7);
    if (event.key === "Home") next = addDays(date, -((date.getDay() - weekStartsOn + 7) % 7));
    if (event.key === "End") next = addDays(date, 6 - ((date.getDay() - weekStartsOn + 7) % 7));
    if (event.key === "PageUp") next = addMonths(date, -1);
    if (event.key === "PageDown") next = addMonths(date, 1);
    if (!next) return;
    event.preventDefault();
    moveFocus(next);
  };

  const selectMonth = (month: number) => {
    const year = resolvedDisplayedMonth.getFullYear();
    const currentDay = resolvedValue?.getDate() ?? 1;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const next = new Date(year, month, Math.min(currentDay, lastDay));
    commitDisplayedMonth(next);
    commitValue(next);
  };

  return {
    commitDisplayedMonth,
    commitValue,
    days,
    focusedDate,
    gridRef,
    handleDayKeyDown,
    next: () => commitDisplayedMonth(addMonths(resolvedDisplayedMonth, 1)),
    nextYear: () =>
      commitDisplayedMonth(
        new Date(resolvedDisplayedMonth.getFullYear() + 1, resolvedDisplayedMonth.getMonth(), 1)
      ),
    previous: () => commitDisplayedMonth(addMonths(resolvedDisplayedMonth, -1)),
    previousYear: () =>
      commitDisplayedMonth(
        new Date(resolvedDisplayedMonth.getFullYear() - 1, resolvedDisplayedMonth.getMonth(), 1)
      ),
    range: resolvedRange,
    selectMonth,
    value: resolvedValue,
    viewDate: resolvedDisplayedMonth
  };
}
