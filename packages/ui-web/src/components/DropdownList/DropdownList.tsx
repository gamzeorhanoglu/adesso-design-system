import {
  forwardRef,
  type HTMLAttributes
} from "react";
import {
  useDropdownListState,
  type DropdownListOption
} from "../../hooks/useDropdownListState";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { ListItem } from "../ListItem/ListItem";
import { SearchInput } from "../SearchInput/SearchInput";

export type { DropdownListOption } from "../../hooks/useDropdownListState";

export interface DropdownListProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  "aria-label": string;
  clearAllLabel?: string;
  defaultValue?: readonly string[];
  emptyMessage?: string;
  multiple?: boolean;
  onValueChange?: (value: string[]) => void;
  options: readonly DropdownListOption[];
  searchLabel?: string;
  searchPlaceholder?: string;
  searchable?: boolean;
  selectAllLabel?: string;
  showButtonGroup?: boolean;
  value?: readonly string[];
}

export const DropdownList = forwardRef<HTMLDivElement, DropdownListProps>(
  function DropdownList(
    {
      "aria-label": ariaLabel,
      className,
      clearAllLabel = "Clear All",
      defaultValue,
      emptyMessage = "No options found",
      multiple = true,
      onValueChange,
      options,
      searchLabel = "Search options",
      searchPlaceholder = "Placeholder",
      searchable = true,
      selectAllLabel = "Select All",
      showButtonGroup = true,
      value,
      ...props
    },
    ref
  ) {
    const {
      allSelected,
      clearAll,
      filteredOptions,
      query,
      selectAll,
      selectedValues,
      setQuery,
      toggleValue
    } = useDropdownListState({
      defaultValue,
      multiple,
      onValueChange,
      options,
      value
    });
    const classes = ["ads-dropdown-list", className].filter(Boolean).join(" ");
    const showBulkActions = multiple && showButtonGroup;

    return (
      <div {...props} ref={ref} className={classes}>
        {searchable ? (
          <SearchInput
            aria-label={searchLabel}
            placeholder={searchPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            onClear={() => setQuery("")}
          />
        ) : null}

        <div
          className="ads-dropdown-list-options"
          role="listbox"
          aria-label={ariaLabel}
          aria-multiselectable={multiple || undefined}
        >
          {filteredOptions.length ? (
            filteredOptions.map((option) => (
              <ListItem
                key={option.value}
                label={option.label}
                disabled={option.disabled}
                selected={selectedValues.includes(option.value)}
                showCheckbox={multiple}
                onSelectionChange={() => toggleValue(option.value)}
              />
            ))
          ) : (
            <p className="ads-dropdown-list-empty">{emptyMessage}</p>
          )}
        </div>

        {showBulkActions ? (
          <ButtonGroup aria-label="Dropdown list actions">
            <Button
              variant="ghost"
              size="medium"
              disabled={selectedValues.length === 0}
              onClick={clearAll}
            >
              {clearAllLabel}
            </Button>
            <Button
              size="medium"
              disabled={allSelected}
              onClick={selectAll}
            >
              {selectAllLabel}
            </Button>
          </ButtonGroup>
        ) : null}
      </div>
    );
  }
);
