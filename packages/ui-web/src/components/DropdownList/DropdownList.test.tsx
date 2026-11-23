import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DropdownList, type DropdownListOption } from "./DropdownList";

const options: DropdownListOption[] = [
  { label: "Turkey", value: "tr" },
  { label: "Germany", value: "de" },
  { label: "Spain", value: "es", disabled: true }
];

describe("DropdownList", () => {
  it("composes canonical ADS search, list items, and actions", () => {
    render(<DropdownList aria-label="Countries" options={options} />);

    expect(screen.getByRole("searchbox", { name: "Search options" })).toHaveClass(
      "ads-search-input-control"
    );
    expect(screen.getByRole("listbox", { name: "Countries" })).toHaveClass(
      "ads-dropdown-list-options"
    );
    expect(screen.getAllByRole("option")).toHaveLength(3);
    expect(screen.getByRole("group", { name: "Dropdown list actions" })).toHaveClass(
      "ads-button-group"
    );
  });

  it("filters options with the ADS SearchInput", () => {
    render(<DropdownList aria-label="Countries" options={options} />);

    fireEvent.change(screen.getByRole("searchbox", { name: "Search options" }), {
      target: { value: "ger" }
    });

    expect(screen.getByRole("option", { name: "Germany" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Turkey" })).not.toBeInTheDocument();
  });

  it("supports item and bulk selection while ignoring disabled options", () => {
    const onValueChange = vi.fn();
    render(
      <DropdownList
        aria-label="Countries"
        options={options}
        onValueChange={onValueChange}
      />
    );

    fireEvent.click(screen.getByRole("option", { name: "Turkey" }));
    expect(onValueChange).toHaveBeenLastCalledWith(["tr"]);

    fireEvent.click(screen.getByRole("button", { name: "Select All" }));
    expect(onValueChange).toHaveBeenLastCalledWith(["tr", "de"]);
  });

  it("uses single-selection mode without checkboxes or bulk actions", () => {
    render(
      <DropdownList aria-label="Countries" options={options} multiple={false} />
    );

    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
    expect(screen.queryByRole("group", { name: "Dropdown list actions" })).not.toBeInTheDocument();
  });
});
