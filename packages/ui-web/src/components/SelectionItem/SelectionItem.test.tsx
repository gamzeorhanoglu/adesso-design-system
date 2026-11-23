import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectionItem } from "./SelectionItem";

describe("SelectionItem", () => {
  it("composes the ADS RadioButton with visible and accessible content", () => {
    render(
      <SelectionItem
        type="radio"
        label="Starter plan"
        description="For small teams"
        name="plan"
      />
    );
    const radio = screen.getByRole("radio", { name: "Starter plan" });

    fireEvent.click(screen.getByText("Starter plan"));

    expect(radio).toBeChecked();
    expect(radio).toHaveAccessibleDescription("For small teams");
  });

  it("composes the ADS Checkbox and preserves its states", () => {
    render(
      <SelectionItem
        type="checkbox"
        label="Select all"
        description="Includes every row"
        indeterminate
      />
    );
    const checkbox = screen.getByRole("checkbox", { name: "Select all" });

    expect(checkbox).toHaveProperty("indeterminate", true);
    expect(checkbox).toHaveAccessibleDescription("Includes every row");
  });
});
