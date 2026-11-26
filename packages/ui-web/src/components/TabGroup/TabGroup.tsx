import type { HTMLAttributes, ReactNode } from "react";
import { useTabSelection } from "../../hooks/useTabSelection";
import { Tab, type TabVariant } from "../Tab/Tab";

export interface TabGroupItem {
  disabled?: boolean;
  id: string;
  label: ReactNode;
  panelId?: string;
}

export interface TabGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "onChange"> {
  defaultSelectedId?: string;
  items?: readonly TabGroupItem[];
  onSelectedIdChange?: (id: string) => void;
  selectedId?: string;
  variant?: TabVariant;
}

const defaultItems: readonly TabGroupItem[] = Array.from({ length: 5 }, (_, index) => ({
  id: `option-${index + 1}`,
  label: "Option Text",
}));

export function TabGroup({
  className,
  defaultSelectedId,
  items = defaultItems,
  onSelectedIdChange,
  selectedId,
  variant = "primary",
  ...props
}: TabGroupProps) {
  const selection = useTabSelection({
    defaultSelectedId,
    items,
    onSelectedIdChange,
    selectedId,
  });

  return (
    <div
      {...props}
      aria-label={props["aria-label"] ?? "Tabs"}
      className={["ads-tab-group", className].filter(Boolean).join(" ")}
      data-variant={variant}
      role="tablist"
    >
      {items.map((item) => {
        const selected = item.id === selection.selectedId;
        return (
          <Tab
            aria-controls={item.panelId}
            data-tab-id={item.id}
            disabled={item.disabled}
            key={item.id}
            onClick={() => selection.selectTab(item.id)}
            onKeyDown={(event) => selection.handleKeyDown(item.id, event)}
            selected={selected}
            tabIndex={selected ? 0 : -1}
            variant={variant}
          >
            {item.label}
          </Tab>
        );
      })}
    </div>
  );
}
