import { forwardRef, type InputHTMLAttributes } from "react";

type NativeRadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

export interface RadioButtonProps extends NativeRadioButtonProps {
  "aria-label": string;
  error?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton(
    {
      "aria-label": ariaLabel,
      "aria-invalid": ariaInvalid,
      className,
      disabled = false,
      error = false,
      ...props
    },
    ref
  ) {
    const rootClassName = ["ads-selection", "ads-radio", className]
      .filter(Boolean)
      .join(" ");

    return (
      <label className={rootClassName} data-error={error || undefined}>
        <input
          {...props}
          ref={ref}
          className="ads-selection-native"
          type="radio"
          aria-label={ariaLabel}
          aria-invalid={error ? true : ariaInvalid}
          disabled={disabled}
        />
        <span className="ads-selection-control" aria-hidden="true">
          <span className="ads-radio-dot" />
        </span>
      </label>
    );
  }
);
