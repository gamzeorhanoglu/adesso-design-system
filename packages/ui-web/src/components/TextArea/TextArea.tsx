import {
  forwardRef,
  useId,
  type TextareaHTMLAttributes
} from "react";
import { AlertTriangleIcon, InfoIcon } from "@ads/icons";
import { useTextAreaResize } from "../../hooks/useTextAreaResize";
import { useTextAreaState } from "../../hooks/useTextAreaState";

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "defaultValue" | "value"> {
  containerClassName?: string;
  defaultValue?: TextareaHTMLAttributes<HTMLTextAreaElement>["defaultValue"];
  errorMessage?: string;
  label: string;
  showInfo?: boolean;
  showLabel?: boolean;
  showResizeHandle?: boolean;
  showSupportingText?: boolean;
  supportingText?: string;
  value?: TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      className,
      containerClassName,
      defaultValue,
      disabled = false,
      errorMessage,
      id: providedId,
      label,
      onBlur,
      onChange,
      onFocus,
      required = false,
      showInfo = false,
      showLabel = true,
      showResizeHandle = true,
      showSupportingText = true,
      supportingText,
      value,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const inputId = providedId ?? `ads-textarea-${generatedId}`;
    const supportId = supportingText ? `${inputId}-support` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;
    const describedBy = [ariaDescribedBy, supportId, errorId].filter(Boolean).join(" ") || undefined;
    const state = useTextAreaState({
      defaultValue,
      disabled,
      hasError: Boolean(errorMessage),
      onBlur,
      onChange,
      onFocus,
      value
    });
    const resize = useTextAreaResize(showResizeHandle && !disabled);
    const rootClassName = ["ads-textarea", "ads-field", containerClassName]
      .filter(Boolean)
      .join(" ");
    const inputClassName = ["ads-textarea-input", className]
      .filter(Boolean)
      .join(" ");
    const setTextAreaRef = (node: HTMLTextAreaElement | null) => {
      resize.textareaRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    return (
      <div
        className={rootClassName}
        data-state={state.state}
        data-resizable={showResizeHandle || undefined}
      >
        {showLabel ? (
          <label className="ads-field-label" htmlFor={inputId}>
            <span>{label}</span>
            {required ? <span className="ads-field-required" aria-hidden="true">*</span> : null}
            {showInfo ? (
              <span className="ads-field-info"><InfoIcon size="xs" /></span>
            ) : null}
          </label>
        ) : null}

        <div className="ads-textarea-control">
          <textarea
            {...props}
            ref={setTextAreaRef}
            id={inputId}
            className={inputClassName}
            value={state.resolvedValue}
            disabled={disabled}
            required={required}
            aria-label={showLabel ? undefined : label}
            aria-invalid={errorMessage ? true : undefined}
            aria-describedby={describedBy}
            onBlur={state.handleBlur}
            onChange={state.handleChange}
            onFocus={state.handleFocus}
          />
          {showResizeHandle ? (
            <span
              className="ads-textarea-resize-handle"
              aria-hidden="true"
              onPointerDown={resize.handleResizePointerDown}
            />
          ) : null}
        </div>

        {showSupportingText && supportingText ? (
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
  }
);
