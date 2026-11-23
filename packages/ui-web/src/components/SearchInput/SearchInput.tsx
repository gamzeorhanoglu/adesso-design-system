import {
  forwardRef,
  type InputHTMLAttributes
} from "react";
import { SearchIcon, XIcon } from "@ads/icons";
import { useInputClear } from "../../hooks/useInputClear";
import { useInputState } from "../../hooks/useInputState";

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  "aria-label": string;
  clearable?: boolean;
  clearLabel?: string;
  error?: boolean;
  onClear?: () => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    {
      "aria-label": ariaLabel,
      className,
      clearable = true,
      clearLabel = "Clear search",
      defaultValue,
      disabled = false,
      error = false,
      onBlur,
      onChange,
      onClear,
      onFocus,
      readOnly = false,
      value,
      ...props
    },
    ref
  ) {
    const {
      state,
      hasValue,
      resolvedValue,
      clearValue,
      handleChange,
      handleFocus,
      handleBlur
    } = useInputState({
      value,
      defaultValue,
      disabled,
      hasError: error,
      onChange,
      onFocus,
      onBlur
    });
    const { canClear, handleClear, setInputRef } = useInputClear({
      clearValue,
      disabled,
      forwardedRef: ref,
      hasValue,
      onClear,
      readOnly
    });
    const classes = ["ads-search-input", className].filter(Boolean).join(" ");

    return (
      <div className={classes} data-state={state}>
        <span className="ads-search-input-icon" aria-hidden="true">
          <SearchIcon size="md" />
        </span>
        <input
          {...props}
          ref={setInputRef}
          type="search"
          aria-label={ariaLabel}
          aria-invalid={error || undefined}
          className="ads-search-input-control"
          disabled={disabled}
          readOnly={readOnly}
          value={resolvedValue}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {clearable && canClear ? (
          <button
            className="ads-search-input-clear"
            type="button"
            aria-label={clearLabel}
            onClick={handleClear}
          >
            <XIcon size="sm" />
          </button>
        ) : null}
      </div>
    );
  }
);
