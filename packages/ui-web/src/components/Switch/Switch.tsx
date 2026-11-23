import { forwardRef, type InputHTMLAttributes } from "react";

export type SwitchSize = "desktop" | "mobile";

type NativeSwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

export interface SwitchProps extends NativeSwitchProps {
  "aria-label": string;
  size?: SwitchSize;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    "aria-label": ariaLabel,
    className,
    disabled = false,
    size = "desktop",
    ...props
  },
  ref
) {
  const rootClassName = ["ads-switch", `size-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={rootClassName}>
      <input
        {...props}
        ref={ref}
        className="ads-switch-native"
        type="checkbox"
        role="switch"
        aria-label={ariaLabel}
        disabled={disabled}
      />
      <span className="ads-switch-track" aria-hidden="true">
        <span className="ads-switch-knob" />
      </span>
    </label>
  );
});
