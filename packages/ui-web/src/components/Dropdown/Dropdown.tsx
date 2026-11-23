import {
  forwardRef,
  useId,
  type HTMLAttributes
} from "react";
import {
  AlertTriangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InfoIcon
} from "@ads/icons";
import { useDropdownState } from "../../hooks/useDropdownState";
import {
  DropdownList,
  type DropdownListOption
} from "../DropdownList/DropdownList";

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  defaultOpen?: boolean;
  defaultValue?: readonly string[];
  disabled?: boolean;
  errorMessage?: string;
  label: string;
  listLabel?: string;
  multiple?: boolean;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string[]) => void;
  open?: boolean;
  options: readonly DropdownListOption[];
  placeholder?: string;
  required?: boolean;
  showDropdownList?: boolean;
  showIcon?: boolean;
  showInfo?: boolean;
  showLabel?: boolean;
  showSupportingText?: boolean;
  supportingText?: string;
  value?: readonly string[];
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  function Dropdown(
    {
      className,
      defaultOpen = false,
      defaultValue,
      disabled = false,
      errorMessage,
      label,
      listLabel,
      multiple = true,
      onOpenChange,
      onValueChange,
      open,
      options,
      placeholder = "Placeholder",
      required = false,
      showDropdownList = true,
      showIcon = true,
      showInfo = false,
      showLabel = true,
      showSupportingText = true,
      supportingText,
      value,
      ...props
    },
    forwardedRef
  ) {
    const generatedId = useId();
    const triggerId = `ads-dropdown-${generatedId}`;
    const labelId = `${triggerId}-label`;
    const listboxId = `${triggerId}-listbox`;
    const supportId = supportingText ? `${triggerId}-support` : undefined;
    const errorId = errorMessage ? `${triggerId}-error` : undefined;
    const {
      commitValue,
      handleTriggerBlur,
      handleTriggerFocus,
      handleTriggerKeyDown,
      open: resolvedOpen,
      rootRef,
      selectedValues,
      state,
      toggleOpen
    } = useDropdownState({
      defaultOpen,
      defaultValue,
      disabled,
      error: Boolean(errorMessage),
      multiple,
      onOpenChange,
      onValueChange,
      open,
      value
    });
    const selectedLabels = options
      .filter((option) => selectedValues.includes(option.value))
      .map((option) => option.label);
    const displayValue = selectedLabels.length ? selectedLabels.join(", ") : placeholder;
    const describedBy = [supportId, errorId].filter(Boolean).join(" ") || undefined;
    const classes = ["ads-dropdown", "ads-field", className]
      .filter(Boolean)
      .join(" ");

    const setRootRef = (node: HTMLDivElement | null) => {
      rootRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    return (
      <div
        {...props}
        ref={setRootRef}
        className={classes}
        data-state={state}
        data-show-label={showLabel || undefined}
      >
        {showLabel ? (
          <span id={labelId} className="ads-field-label">
            <span>{label}</span>
            {required ? (
              <span className="ads-field-required" aria-hidden="true">*</span>
            ) : null}
            {showInfo ? (
              <span className="ads-field-info"><InfoIcon size="xs" /></span>
            ) : null}
          </span>
        ) : null}

        <button
          id={triggerId}
          type="button"
          className="ads-field-control ads-dropdown-trigger"
          aria-label={`${label}: ${displayValue}`}
          aria-haspopup="listbox"
          aria-expanded={resolvedOpen}
          aria-controls={resolvedOpen && showDropdownList ? listboxId : undefined}
          aria-describedby={describedBy}
          aria-invalid={errorMessage ? true : undefined}
          disabled={disabled}
          onBlur={handleTriggerBlur}
          onClick={toggleOpen}
          onFocus={handleTriggerFocus}
          onKeyDown={handleTriggerKeyDown}
        >
          <span className="ads-dropdown-value">{displayValue}</span>
          {showIcon ? (
            <span className="ads-dropdown-icon" aria-hidden="true">
              {resolvedOpen ? (
                <ChevronUpIcon size="md" />
              ) : (
                <ChevronDownIcon size="md" />
              )}
            </span>
          ) : null}
        </button>

        {!resolvedOpen && showSupportingText && supportingText ? (
          <span id={supportId} className="ads-field-support">{supportingText}</span>
        ) : null}

        {errorMessage ? (
          <span id={errorId} className="ads-field-error">
            <AlertTriangleIcon size="xs" />
            <span>{errorMessage}</span>
          </span>
        ) : null}

        {resolvedOpen && showDropdownList ? (
          <div className="ads-dropdown-menu">
            <DropdownList
              aria-label={listLabel ?? `${label} options`}
              listboxId={listboxId}
              multiple={multiple}
              options={options}
              searchable={false}
              showButtonGroup={false}
              value={selectedValues}
              onValueChange={commitValue}
            />
          </div>
        ) : null}
      </div>
    );
  }
);

export type { DropdownListOption as DropdownOption };
