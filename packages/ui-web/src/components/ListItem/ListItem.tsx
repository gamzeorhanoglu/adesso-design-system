import {
  forwardRef,
  type HTMLAttributes,
  type MouseEvent
} from "react";
import { useListItemSelection } from "../../hooks/useListItemSelection";
import { Checkbox } from "../Checkbox/Checkbox";

export interface ListItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  disabled?: boolean;
  label: string;
  onSelectionChange?: (selected: boolean) => void;
  selected?: boolean;
  showCheckbox?: boolean;
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  function ListItem(
    {
      className,
      disabled = false,
      label,
      onClick,
      onKeyDown,
      onSelectionChange,
      selected = false,
      showCheckbox = true,
      tabIndex,
      ...props
    },
    ref
  ) {
    const { handleKeyDown, select } = useListItemSelection({
      disabled,
      onSelectionChange,
      selected
    });
    const classes = ["ads-list-item", className].filter(Boolean).join(" ");

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      onClick?.(event);
      if (!event.defaultPrevented) select();
    };

    return (
      <div
        {...props}
        ref={ref}
        role="option"
        aria-label={label}
        aria-disabled={disabled || undefined}
        aria-selected={selected}
        className={classes}
        data-disabled={disabled || undefined}
        data-selected={selected || undefined}
        tabIndex={disabled ? -1 : (tabIndex ?? 0)}
        onClick={handleClick}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (!event.defaultPrevented) handleKeyDown(event);
        }}
      >
        {showCheckbox ? (
          <Checkbox
            aria-label={label}
            checked={selected}
            disabled={disabled}
            tabIndex={-1}
            onChange={() => undefined}
          />
        ) : null}
        <span className="ads-list-item-label">{label}</span>
      </div>
    );
  }
);
