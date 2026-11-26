import { useCallback, useState, type KeyboardEvent } from "react";

export interface TabSelectionItem {
  disabled?: boolean;
  id: string;
}

export interface TabSelectionOptions {
  defaultSelectedId?: string;
  items: readonly TabSelectionItem[];
  onSelectedIdChange?: (id: string) => void;
  selectedId?: string;
}

export function useTabSelection({
  defaultSelectedId,
  items,
  onSelectedIdChange,
  selectedId,
}: TabSelectionOptions) {
  const firstEnabledId = items.find((item) => !item.disabled)?.id;
  const [internalSelectedId, setInternalSelectedId] = useState(
    defaultSelectedId ?? firstEnabledId,
  );
  const currentSelectedId = selectedId ?? internalSelectedId;

  const selectTab = useCallback(
    (id: string) => {
      const item = items.find((candidate) => candidate.id === id);
      if (!item || item.disabled || id === currentSelectedId) return;
      if (selectedId === undefined) setInternalSelectedId(id);
      onSelectedIdChange?.(id);
    },
    [currentSelectedId, items, onSelectedIdChange, selectedId],
  );

  const handleKeyDown = useCallback(
    (id: string, event: KeyboardEvent<HTMLButtonElement>) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const enabledItems = items.filter((item) => !item.disabled);
      if (enabledItems.length === 0) return;

      event.preventDefault();
      const currentIndex = Math.max(
        0,
        enabledItems.findIndex((item) => item.id === id),
      );
      let nextIndex = currentIndex;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = enabledItems.length - 1;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % enabledItems.length;
      if (event.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
      }

      const nextId = enabledItems[nextIndex]?.id;
      if (!nextId) return;
      const tabList = event.currentTarget.closest('[role="tablist"]');
      const nextTab = Array.from(
        tabList?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? [],
      ).find((tab) => tab.dataset.tabId === nextId);
      nextTab?.focus();
      selectTab(nextId);
    },
    [items, selectTab],
  );

  return { handleKeyDown, selectTab, selectedId: currentSelectedId };
}
