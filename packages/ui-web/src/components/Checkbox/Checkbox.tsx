import { forwardRef, type InputHTMLAttributes } from "react";
import { CheckIcon, MinusIcon } from "@ads/icons";
import { useCheckboxIndeterminate } from "../../hooks/useCheckboxIndeterminate";

type NativeCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

export interface CheckboxProps extends NativeCheckboxProps {
  "aria-label": string;
  error?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    "aria-label": ariaLabel,
    "aria-invalid": ariaInvalid,
    checked,
    className,
    defaultChecked,
    disabled = false,
    error = false,
    indeterminate = false,
    ...props
  },
  ref
) {
  const { setInputRef } = useCheckboxIndeterminate({ forwardedRef: ref, indeterminate });
  const rootClassName = ["ads-selection", "ads-checkbox", className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={rootClassName} data-error={error || undefined}>
      <input
        {...props}
        ref={setInputRef}
        className="ads-selection-native"
        type="checkbox"
        aria-label={ariaLabel}
        aria-checked={indeterminate ? "mixed" : undefined}
        aria-invalid={error ? true : ariaInvalid}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <span className="ads-selection-control" aria-hidden="true">
        <span className="ads-selection-mark ads-checkbox-check">
          <CheckIcon size="sm" />
        </span>
        <span className="ads-selection-mark ads-checkbox-minus">
          <MinusIcon size="sm" />
        </span>
      </span>
    </label>
  );
});
