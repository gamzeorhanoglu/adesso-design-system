import {
  forwardRef,
  useId,
  type HTMLAttributes
} from "react";
import { AlertTriangleIcon, CalendarIcon, InfoIcon } from "@ads/icons";
import { useDatePickerState } from "../../hooks/useDatePickerState";
import { Calendar, type CalendarProps } from "../Calendar/Calendar";

export interface DatePickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  defaultDisplayedMonth?: Date;
  defaultInputValue?: string;
  defaultOpen?: boolean;
  defaultValue?: Date;
  disabled?: boolean;
  displayedMonth?: Date;
  errorMessage?: string;
  fromYear?: number;
  inputName?: string;
  isDateDisabled?: CalendarProps["isDateDisabled"];
  label: string;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  onDisplayedMonthChange?: CalendarProps["onDisplayedMonthChange"];
  onInputValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: Date | undefined) => void;
  open?: boolean;
  placeholder?: string;
  required?: boolean;
  showIcon?: boolean;
  showInfo?: boolean;
  showLabel?: boolean;
  showSupportingText?: boolean;
  supportingText?: string;
  toYear?: number;
  value?: Date;
  weekStartsOn?: 0 | 1;
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  function DatePicker(
    {
      className,
      defaultDisplayedMonth,
      defaultInputValue,
      defaultOpen = false,
      defaultValue,
      disabled = false,
      displayedMonth,
      errorMessage,
      fromYear,
      inputName,
      isDateDisabled,
      label,
      locale = "tr-TR",
      maxDate,
      minDate,
      onDisplayedMonthChange,
      onInputValueChange,
      onOpenChange,
      onValueChange,
      open,
      placeholder = "GG / AA / YYYY",
      required = false,
      showIcon = true,
      showInfo = false,
      showLabel = true,
      showSupportingText = true,
      supportingText,
      toYear,
      value,
      weekStartsOn = 1,
      ...props
    },
    forwardedRef
  ) {
    const generatedId = useId();
    const inputId = `ads-date-picker-${generatedId}`;
    const labelId = `${inputId}-label`;
    const supportId = supportingText ? `${inputId}-support` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;
    const describedBy = [supportId, errorId].filter(Boolean).join(" ") || undefined;
    const state = useDatePickerState({
      defaultInputValue,
      defaultOpen,
      defaultValue,
      disabled,
      error: Boolean(errorMessage),
      onInputValueChange,
      onOpenChange,
      onValueChange,
      open,
      value
    });
    const classes = ["ads-date-picker", "ads-field", className]
      .filter(Boolean)
      .join(" ");

    const setRootRef = (node: HTMLDivElement | null) => {
      state.rootRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    return (
      <div
        {...props}
        ref={setRootRef}
        className={classes}
        data-state={state.state}
        data-show-label={showLabel || undefined}
      >
        {showLabel ? (
          <label id={labelId} className="ads-field-label" htmlFor={inputId}>
            <span>{label}</span>
            {required ? <span className="ads-field-required" aria-hidden="true">*</span> : null}
            {showInfo ? (
              <span className="ads-field-info"><InfoIcon size="xs" /></span>
            ) : null}
          </label>
        ) : null}

        <div className="ads-field-control">
          <input
            id={inputId}
            name={inputName}
            className="ads-field-input"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder={placeholder}
            value={state.inputValue}
            disabled={disabled}
            required={required}
            aria-labelledby={showLabel ? labelId : undefined}
            aria-label={showLabel ? undefined : label}
            aria-describedby={describedBy}
            aria-invalid={errorMessage ? true : undefined}
            aria-haspopup="dialog"
            aria-expanded={state.open}
            onBlur={state.handleBlur}
            onChange={state.handleInputChange}
            onFocus={state.handleFocus}
            onKeyDown={state.handleInputKeyDown}
          />
          {showIcon ? (
            <button
              type="button"
              className="ads-date-picker-action"
              aria-label={`${label} takvimini ${state.open ? "kapat" : "aç"}`}
              disabled={disabled}
              onClick={state.toggleOpen}
            >
              <CalendarIcon size="md" />
            </button>
          ) : null}
        </div>

        {!state.open && showSupportingText && supportingText ? (
          <span id={supportId} className="ads-field-support">{supportingText}</span>
        ) : null}

        {errorMessage ? (
          <span id={errorId} className="ads-field-error">
            <AlertTriangleIcon size="xs" />
            <span>{errorMessage}</span>
          </span>
        ) : null}

        {state.open ? (
          <div className="ads-date-picker-calendar" role="dialog" aria-label={`${label} takvimi`}>
            <Calendar
              defaultDisplayedMonth={defaultDisplayedMonth ?? state.value}
              displayedMonth={displayedMonth}
              fromYear={fromYear}
              isDateDisabled={isDateDisabled}
              locale={locale}
              maxDate={maxDate}
              minDate={minDate}
              toYear={toYear}
              value={state.value}
              weekStartsOn={weekStartsOn}
              onDisplayedMonthChange={onDisplayedMonthChange}
              onValueChange={state.selectDate}
            />
          </div>
        ) : null}
      </div>
    );
  }
);
