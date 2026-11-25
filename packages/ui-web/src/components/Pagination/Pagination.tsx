import type { HTMLAttributes } from "react";
import { paginationWindow, usePaginationState } from "../../hooks/usePaginationState";
import { PaginationControls } from "./PaginationControls";
import { PaginationItem } from "./PaginationItem";

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  pageCount: number;
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
  showControlLabels?: boolean;
  previousLabel?: string;
  nextLabel?: string;
}

export function Pagination({
  pageCount,
  page,
  defaultPage,
  onPageChange,
  showControlLabels = true,
  previousLabel = "Previous",
  nextLabel = "Next",
  className,
  ...props
}: PaginationProps) {
  const state = usePaginationState({ pageCount, page, defaultPage, onPageChange });
  const visiblePages = paginationWindow(state.currentPage, state.maxPage);

  return (
    <nav {...props} aria-label={props["aria-label"] ?? "Pagination"} className={["ads-pagination", className].filter(Boolean).join(" ")}>
      <PaginationControls
        direction="previous"
        label={previousLabel}
        showLabel={showControlLabels}
        disabled={!state.canGoPrevious}
        onClick={() => state.selectPage(state.currentPage - 1)}
      />
      <div className="ads-pagination-list">
        {visiblePages.map((item, index) =>
          item === "ellipsis" ? (
            <span className="ads-pagination-ellipsis" aria-hidden="true" key={`ellipsis-${index}`}>…</span>
          ) : (
            <PaginationItem
              key={item}
              page={item}
              active={item === state.currentPage}
              onClick={() => state.selectPage(item)}
            />
          ),
        )}
      </div>
      <PaginationControls
        direction="next"
        label={nextLabel}
        showLabel={showControlLabels}
        disabled={!state.canGoNext}
        onClick={() => state.selectPage(state.currentPage + 1)}
      />
    </nav>
  );
}
