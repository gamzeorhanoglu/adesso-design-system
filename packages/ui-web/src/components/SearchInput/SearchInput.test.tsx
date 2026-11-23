import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("renders the canonical searchable ADS input", () => {
    render(<SearchInput aria-label="Search countries" placeholder="Search" />);

    const input = screen.getByRole("searchbox", { name: "Search countries" });
    expect(input).toHaveAttribute("placeholder", "Search");
    expect(input.closest(".ads-search-input")).toHaveAttribute("data-state", "default");
  });

  it("derives filled and focus states from runtime interaction", () => {
    render(<SearchInput aria-label="Search countries" defaultValue="Tur" />);
    const input = screen.getByRole("searchbox", { name: "Search countries" });
    const root = input.closest(".ads-search-input");

    expect(root).toHaveAttribute("data-state", "filled");
    fireEvent.focus(input);
    expect(root).toHaveAttribute("data-state", "focus");
  });

  it("clears an uncontrolled query and restores focus", () => {
    const onClear = vi.fn();
    render(
      <SearchInput
        aria-label="Search countries"
        defaultValue="Turkey"
        onClear={onClear}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));

    const input = screen.getByRole("searchbox", { name: "Search countries" });
    expect(input).toHaveValue("");
    expect(input).toHaveFocus();
    expect(onClear).toHaveBeenCalledOnce();
  });

  it("applies disabled and error semantics", () => {
    const { rerender } = render(
      <SearchInput aria-label="Search countries" disabled />
    );
    let input = screen.getByRole("searchbox", { name: "Search countries" });
    expect(input.closest(".ads-search-input")).toHaveAttribute("data-state", "disabled");

    rerender(<SearchInput aria-label="Search countries" error />);
    input = screen.getByRole("searchbox", { name: "Search countries" });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input.closest(".ads-search-input")).toHaveAttribute("data-state", "error");
  });
});
