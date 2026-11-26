import { useId, type HTMLAttributes, type ReactNode } from "react";
import { AlertTriangleIcon, XIcon } from "@ads/icons";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { useDialogBehavior } from "../../hooks/useDialogBehavior";

export type DialogDevice = "desktop" | "mobile";
export type DialogState = "default" | "error";
export type DialogType = "pop-up" | "sticky";

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  device?: DialogDevice;
  open?: boolean;
  title?: string;
  bodyText?: string;
  state?: DialogState;
  type?: DialogType;
  showIcon?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  showSecondaryAction?: boolean;
  onClose?: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  children?: ReactNode;
}

export function Dialog({
  bodyText,
  children,
  className,
  device = "desktop",
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  open = true,
  primaryLabel = "Button",
  secondaryLabel = "Button",
  showIcon = true,
  showSecondaryAction = true,
  state = "default",
  title = "Lorem ipsum dolor sit amet?",
  type = "pop-up",
  ...props
}: DialogProps) {
  const isError = state === "error";
  const isMobile = device === "mobile";
  const titleId = useId();
  const bodyId = useId();
  const { dialogRef } = useDialogBehavior({ modal: type === "pop-up", onClose, open });
  const resolvedBodyText = bodyText ?? (
    isMobile && type === "pop-up"
      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  );

  if (!open) return null;

  return (
    <div
      {...props}
      aria-modal={type === "pop-up" || undefined}
      className={["ads-dialog", `device-${device}`, `state-${state}`, `type-${type}`, className]
        .filter(Boolean)
        .join(" ")}
      data-device={device}
      data-state={state}
      data-type={type}
      role="dialog"
      aria-labelledby={titleId}
      aria-describedby={children ? undefined : bodyId}
      ref={dialogRef}
      tabIndex={-1}
    >
      <div className="ads-dialog-content">
        <div className="ads-dialog-title-row">
          <div className="ads-dialog-title-group">
            {isError && !isMobile && showIcon ? <AlertTriangleIcon size="lg" aria-hidden="true" /> : null}
            <h2 id={titleId}>{title}</h2>
          </div>
          {showIcon ? (
            <button className="ads-dialog-close" type="button" aria-label="Close dialog" onClick={onClose}>
              <XIcon size={isMobile ? "md" : "lg"} aria-hidden="true" />
            </button>
          ) : null}
        </div>
        {children ?? <p id={bodyId}>{resolvedBodyText}</p>}
      </div>
      <ButtonGroup
        aria-label="Dialog actions"
        className="ads-dialog-actions"
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        {isError ? (
          isMobile ? (
            <>
              <Button variant="destructive" size="medium" onClick={onPrimaryAction}>
                {primaryLabel}
              </Button>
              {showSecondaryAction ? (
                <Button variant="ghost" size="medium" onClick={onSecondaryAction}>
                  {secondaryLabel}
                </Button>
              ) : null}
            </>
          ) : (
            <>
              {showSecondaryAction ? (
                <Button variant="ghost" size="large" onClick={onSecondaryAction}>
                  {secondaryLabel}
                </Button>
              ) : null}
              <Button variant="destructive" size="large" onClick={onPrimaryAction}>
                {primaryLabel}
              </Button>
            </>
          )
        ) : showSecondaryAction ? (
          <Button variant="secondary" size={isMobile ? "medium" : "large"} onClick={onSecondaryAction}>
            {secondaryLabel}
          </Button>
        ) : null}
      </ButtonGroup>
    </div>
  );
}
