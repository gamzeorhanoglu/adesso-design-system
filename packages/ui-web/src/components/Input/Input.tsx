import {
  forwardRef,
  useId,
  type InputHTMLAttributes
} from "react";
import {
  AlertTriangleIcon,
  EyeIcon,
  EyeOffIcon,
  InfoIcon,
  XIcon
} from "@ads/icons";
import { useCountrySelection } from "../../hooks/useCountrySelection";
import { useInputClear } from "../../hooks/useInputClear";
import { useInputState } from "../../hooks/useInputState";
import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";

export type InputTypeVariant = "text" | "masked";

export interface InputCountryOption {
  label: string;
  value: string;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "size" | "value"> {
  label: string;
  supportingText?: string;
  errorMessage?: string;
  typeVariant?: InputTypeVariant;
  showInfo?: boolean;
  units?: string;
  clearable?: boolean;
  clearLabel?: string;
  onClear?: () => void;
  showPasswordToggle?: boolean;
  showPasswordLabel?: string;
  hidePasswordLabel?: string;
  passwordVisible?: boolean;
  defaultPasswordVisible?: boolean;
  onPasswordVisibilityChange?: (visible: boolean) => void;
  countryOptions?: readonly InputCountryOption[];
  countryValue?: string;
  defaultCountryValue?: string;
  countrySelectionLabel?: string;
  countrySelectName?: string;
  onCountryChange?: (value: string) => void;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  defaultValue?: InputHTMLAttributes<HTMLInputElement>["defaultValue"];
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id: providedId,
    label,
    supportingText,
    errorMessage,
    typeVariant = "text",
    showInfo = false,
    units,
    clearable = true,
    clearLabel = "Clear input",
    onClear,
    showPasswordToggle = true,
    showPasswordLabel = "Show password",
    hidePasswordLabel = "Hide password",
    passwordVisible,
    defaultPasswordVisible,
    onPasswordVisibilityChange,
    countryOptions = [],
    countryValue,
    defaultCountryValue,
    countrySelectionLabel = "Country selection",
    countrySelectName,
    onCountryChange,
    required = false,
    disabled = false,
    readOnly = false,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    type: nativeType,
    className,
    containerClassName,
    "aria-describedby": ariaDescribedBy,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = providedId ?? `ads-input-${generatedId}`;
  const supportId = supportingText ? `${inputId}-support` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const describedBy = [ariaDescribedBy, supportId, errorId].filter(Boolean).join(" ") || undefined;
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
    hasError: Boolean(errorMessage),
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
  const {
    canToggle,
    inputType,
    toggleVisibility,
    visible: passwordIsVisible
  } = usePasswordVisibility({
    defaultVisible: defaultPasswordVisible,
    disabled,
    masked: typeVariant === "masked",
    nativeType,
    onVisibilityChange: onPasswordVisibilityChange,
    readOnly,
    visible: passwordVisible
  });
  const { handleCountryChange, selectedValue } = useCountrySelection({
    defaultValue: defaultCountryValue,
    fallbackValue: countryOptions[0]?.value,
    onChange: onCountryChange,
    value: countryValue
  });
  const rootClassName = ["ads-field", containerClassName].filter(Boolean).join(" ");
  const inputClassName = ["ads-field-input", className].filter(Boolean).join(" ");
  const showClearAction = typeVariant === "text" && clearable && canClear;
  const showVisibilityAction =
    typeVariant === "masked" && showPasswordToggle && canToggle && hasValue;

  return (
    <div className={rootClassName} data-state={state} data-type={typeVariant}>
      <label className="ads-field-label" htmlFor={inputId}>
        <span>{label}</span>
        {required ? <span className="ads-field-required" aria-hidden="true">*</span> : null}
        {showInfo ? (
          <span className="ads-field-info"><InfoIcon size="xs" /></span>
        ) : null}
      </label>

      <div className="ads-field-control">
        {countryOptions.length ? (
          <select
            className="ads-field-country"
            aria-label={countrySelectionLabel}
            disabled={disabled}
            name={countrySelectName}
            value={selectedValue}
            onChange={handleCountryChange}
          >
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : null}
        <input
          {...props}
          ref={setInputRef}
          id={inputId}
          type={inputType}
          className={inputClassName}
          value={resolvedValue}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={errorMessage ? true : undefined}
          aria-describedby={describedBy}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {units ? <span className="ads-field-addon">{units}</span> : null}
        {showClearAction ? (
          <button className="ads-field-action" type="button" aria-label={clearLabel} onClick={handleClear}>
            <XIcon size="sm" />
          </button>
        ) : null}
        {showVisibilityAction ? (
          <button
            className="ads-field-action"
            type="button"
            aria-label={passwordIsVisible ? hidePasswordLabel : showPasswordLabel}
            aria-pressed={passwordIsVisible}
            onClick={toggleVisibility}
          >
            {passwordIsVisible ? <EyeOffIcon size="sm" /> : <EyeIcon size="sm" />}
          </button>
        ) : null}
      </div>

      {supportingText ? (
        <span id={supportId} className="ads-field-support">{supportingText}</span>
      ) : null}
      {errorMessage ? (
        <span id={errorId} className="ads-field-error">
          <AlertTriangleIcon size="xs" />
          <span>{errorMessage}</span>
        </span>
      ) : null}
    </div>
  );
});
