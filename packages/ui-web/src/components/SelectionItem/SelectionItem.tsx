import { useId } from "react";
import { Checkbox, type CheckboxProps } from "../Checkbox/Checkbox";
import { RadioButton, type RadioButtonProps } from "../RadioButton/RadioButton";

interface SharedSelectionItemProps {
  className?: string;
  controlClassName?: string;
  description?: string;
  id?: string;
  label: string;
}

export type SelectionItemProps =
  | (SharedSelectionItemProps &
      Omit<RadioButtonProps, "aria-label" | "className" | "id"> & {
        type: "radio";
      })
  | (SharedSelectionItemProps &
      Omit<CheckboxProps, "aria-label" | "className" | "id"> & {
        type: "checkbox";
      });

export function SelectionItem(props: SelectionItemProps) {
  const generatedId = useId();
  const {
    className,
    controlClassName,
    description,
    id: providedId,
    label,
    type,
    ...controlProps
  } = props;
  const controlId = providedId ?? `ads-selection-${generatedId}`;
  const descriptionId = description ? `${controlId}-description` : undefined;
  const describedBy = [controlProps["aria-describedby"], descriptionId]
    .filter(Boolean)
    .join(" ") || undefined;
  const rootClassName = ["ads-selection-item", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      {type === "checkbox" ? (
        <Checkbox
          {...(controlProps as Omit<CheckboxProps, "aria-label" | "className" | "id">)}
          id={controlId}
          aria-label={label}
          aria-describedby={describedBy}
          className={controlClassName}
        />
      ) : (
        <RadioButton
          {...(controlProps as Omit<RadioButtonProps, "aria-label" | "className" | "id">)}
          id={controlId}
          aria-label={label}
          aria-describedby={describedBy}
          className={controlClassName}
        />
      )}
      <span className="ads-selection-item-content">
        <label className="ads-selection-item-label" htmlFor={controlId}>{label}</label>
        {description ? (
          <span id={descriptionId} className="ads-selection-item-description">{description}</span>
        ) : null}
      </span>
    </div>
  );
}
