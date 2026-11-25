import { useCallback, useState } from "react";

export interface PaginationStateOptions {
  pageCount: number;
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
}

export function usePaginationState({
  pageCount,
  page,
  defaultPage = 1,
  onPageChange,
}: PaginationStateOptions) {
  const [internalPage, setInternalPage] = useState(defaultPage);
  const maxPage = Math.max(1, Math.floor(pageCount));
  const currentPage = Math.min(Math.max(1, page ?? internalPage), maxPage);

  const selectPage = useCallback(
    (nextPage: number) => {
      const normalized = Math.min(Math.max(1, Math.floor(nextPage)), maxPage);
      if (normalized === currentPage) return;
      if (page === undefined) setInternalPage(normalized);
      onPageChange?.(normalized);
    },
    [currentPage, maxPage, onPageChange, page],
  );

  return {
    currentPage,
    selectPage,
    canGoPrevious: currentPage > 1,
    canGoNext: currentPage < maxPage,
    maxPage,
  };
}

/** Keep first, last and nearby pages visible; insert non-interactive gaps. */
export function paginationWindow(page: number, count: number): Array<number | "ellipsis"> {
  if (count <= 7) return Array.from({ length: count }, (_, index) => index + 1);
  const shown = new Set([1, count, page - 1, page, page + 1].filter(x => x >= 1 && x <= count));
  const ordered = Array.from(shown).sort((a, b) => a - b);
  const result: Array<number | "ellipsis"> = [];
  for (let i = 0; i < ordered.length; i++) {
    const current = ordered[i];
    const previous = ordered[i - 1];
    if (previous !== undefined && current - previous === 2) result.push(previous + 1);
    else if (previous !== undefined && current - previous > 2) result.push("ellipsis");
    result.push(current);
  }
  return result;
}
