import {
  forwardRef,
  useId,
  type HTMLAttributes
} from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@ads/icons";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";
import { DropdownList } from "../DropdownList/DropdownList";
import { Flag, type FlagCountry } from "../Flag/Flag";

export interface LanguageOption {
  country: FlagCountry;
  disabled?: boolean;
  label: string;
  value: string;
}

export interface LanguageProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  "aria-label": string;
  defaultOpen?: boolean;
  defaultValue?: string;
  menuLabel?: string;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string) => void;
  open?: boolean;
  options: readonly LanguageOption[];
  value?: string;
}

export const Language = forwardRef<HTMLDivElement, LanguageProps>(
  function Language(
    {
      "aria-label": ariaLabel,
      className,
      defaultOpen = false,
      defaultValue,
      menuLabel = "Languages",
      onOpenChange,
      onValueChange,
      open,
      options,
      value,
      ...props
    },
    ref
  ) {
    const initialValue = defaultValue ?? options[0]?.value ?? "";
    const listboxId = useId();
    const {
      handleTriggerKeyDown,
      open: resolvedOpen,
      selectValue,
      toggleOpen,
      value: resolvedValue
    } = useLanguageSelector({
      defaultOpen,
      defaultValue: initialValue,
      onOpenChange,
      onValueChange,
      open,
      value
    });
    const selectedOption =
      options.find((option) => option.value === resolvedValue) ?? options[0];
    const classes = ["ads-language", className].filter(Boolean).join(" ");
    const selectedLabel = selectedOption?.label ?? "";

    return (
      <div
        {...props}
        ref={ref}
        className={classes}
        data-open={resolvedOpen || undefined}
      >
        <button
          type="button"
          className="ads-language-trigger"
          aria-label={selectedLabel ? `${ariaLabel}: ${selectedLabel}` : ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={resolvedOpen}
          aria-controls={listboxId}
          disabled={!selectedOption}
          onClick={toggleOpen}
          onKeyDown={handleTriggerKeyDown}
        >
          {selectedOption ? (
            <Flag country={selectedOption.country} size="lg" />
          ) : null}
          {resolvedOpen ? (
            <ChevronUpIcon size="md" />
          ) : (
            <ChevronDownIcon size="md" />
          )}
        </button>

        {resolvedOpen && selectedOption ? (
          <div className="ads-language-menu">
            <DropdownList
              aria-label={menuLabel}
              listboxId={listboxId}
              multiple={false}
              searchable={false}
              showButtonGroup={false}
              options={options}
              value={[selectedOption.value]}
              onValueChange={(nextValue) => {
                const nextOption = nextValue[0];
                if (nextOption) selectValue(nextOption);
              }}
            />
          </div>
        ) : null}
      </div>
    );
  }
);
