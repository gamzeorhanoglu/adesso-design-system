import { useId } from "react";
import { Switch, type SwitchProps } from "../Switch/Switch";

export interface SwitchGroupProps
  extends Omit<SwitchProps, "aria-label" | "className" | "id" | "size"> {
  className?: string;
  description?: string;
  id?: string;
  label: string;
  switchClassName?: string;
}

export function SwitchGroup({
  className,
  description,
  id: providedId,
  label,
  switchClassName,
  ...switchProps
}: SwitchGroupProps) {
  const generatedId = useId();
  const controlId = providedId ?? `ads-switch-${generatedId}`;
  const descriptionId = description ? `${controlId}-description` : undefined;
  const describedBy = [switchProps["aria-describedby"], descriptionId]
    .filter(Boolean)
    .join(" ") || undefined;
  const rootClassName = ["ads-switch-group", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      <span className="ads-switch-group-content">
        <label className="ads-switch-group-label" htmlFor={controlId}>{label}</label>
        {description ? (
          <span id={descriptionId} className="ads-switch-group-description">{description}</span>
        ) : null}
      </span>
      <Switch
        {...switchProps}
        id={controlId}
        aria-label={label}
        aria-describedby={describedBy}
        className={switchClassName}
        size="desktop"
      />
    </div>
  );
}
