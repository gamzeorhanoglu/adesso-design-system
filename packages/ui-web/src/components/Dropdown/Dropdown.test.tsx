import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Dropdown, type DropdownOption } from "./Dropdown";

const options: DropdownOption[] = [
  { label: "Turkey", value: "tr" },
  { label: "Germany", value: "de" },
  { label: "Spain", value: "es", disabled: true }
];

describe("Dropdown", () => {
  it("renders the ADS field anatomy in the default state", () => {
    render(
      <Dropdown
        label="Country"
        options={options}
        required
        showInfo
        supportingText="Choose a country"
      />
    );

    const trigger = screen.getByRole("button", { name: "Country: Placeholder" });
    expect(trigger).toHaveClass("ads-dropdown-trigger", "ads-field-control");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("Choose a country")).toHaveClass("ads-field-support");
  });

  it("opens the canonical ADS DropdownList", () => {
    render(<Dropdown label="Country" options={options} />);
    const trigger = screen.getByRole("button", { name: "Country: Placeholder" });

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("listbox", { name: "Country options" })).toHaveClass(
      "ads-dropdown-list-options"
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
  });

  it("supports controlled single selection and closes after selection", () => {
    const onOpenChange = vi.fn();
    const onValueChange = vi.fn();
    render(
      <Dropdown
        label="Country"
        options={options}
        multiple={false}
        defaultOpen
        onOpenChange={onOpenChange}
        onValueChange={onValueChange}
      />
    );

    fireEvent.click(screen.getByRole("option", { name: "Germany" }));

    expect(onValueChange).toHaveBeenCalledWith(["de"]);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(screen.getByRole("button", { name: "Country: Germany" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("maps error and disabled states to the Figma contract", () => {
    const { rerender } = render(
      <Dropdown label="Country" options={options} errorMessage="Required" />
    );
    expect(screen.getByText("Required").closest(".ads-field-error")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Country: Placeholder" })).toHaveAttribute(
      "aria-invalid",
      "true"
    );

    rerender(<Dropdown label="Country" options={options} disabled />);
    expect(screen.getByRole("button", { name: "Country: Placeholder" })).toBeDisabled();
  });

  it("opens and closes from the keyboard", () => {
    render(<Dropdown label="Country" options={options} />);
    const trigger = screen.getByRole("button", { name: "Country: Placeholder" });

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
