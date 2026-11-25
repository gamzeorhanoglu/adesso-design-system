import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";
import { PaginationControls } from "./PaginationControls";
import { PaginationItem } from "./PaginationItem";

describe("Pagination", () => {
  it("renders the active page and disables Previous at the beginning", () => {
    render(<Pagination pageCount={5} />);
    expect(screen.getByRole("button", { name: "Page 1" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next" })).toBeEnabled();
  });

  it("updates uncontrolled page selection", () => {
    render(<Pagination pageCount={5} />);
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByRole("button", { name: "Page 2" })).toHaveAttribute("aria-current", "page");
  });

  it("preserves controlled page selection and calls onPageChange", () => {
    const onPageChange = vi.fn();
    render(<Pagination pageCount={10} page={4} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(onPageChange).toHaveBeenCalledWith(5);
    expect(screen.getByRole("button", { name: "Page 4" })).toHaveAttribute("aria-current", "page");
  });

  it("truncates long page lists and disables Next on the last page", () => {
    render(<Pagination pageCount={20} defaultPage={20} />);
    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
    expect(document.querySelector(".ads-pagination-ellipsis")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 20" })).toHaveAttribute("aria-current", "page");
  });

  it("supports icon-only controls and accessible standalone page items", () => {
    render(<><PaginationControls direction="next" showLabel={false} /><PaginationItem page={7} active /></>);
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 7" })).toHaveAttribute("aria-current", "page");
  });
});
