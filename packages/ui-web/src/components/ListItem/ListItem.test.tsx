import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ListItem } from "./ListItem";

describe("ListItem", () => {
  it("renders the canonical option row with ADS Checkbox", () => {
    render(<ListItem label="Option one" selected />);

    const option = screen.getByRole("option", { name: "Option one" });
    expect(option).toHaveClass("ads-list-item");
    expect(option).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("checkbox", { name: "Option one" })).toBeChecked();
  });

  it("supports a checkbox-free option", () => {
    render(<ListItem label="Option one" showCheckbox={false} />);
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });

  it("reports selection from click and keyboard interactions", () => {
    const onSelectionChange = vi.fn();
    render(<ListItem label="Option one" onSelectionChange={onSelectionChange} />);
    const option = screen.getByRole("option", { name: "Option one" });

    fireEvent.click(option);
    fireEvent.keyDown(option, { key: "Enter" });

    expect(onSelectionChange).toHaveBeenNthCalledWith(1, true);
    expect(onSelectionChange).toHaveBeenNthCalledWith(2, true);
  });

  it("does not select a disabled option", () => {
    const onSelectionChange = vi.fn();
    render(
      <ListItem label="Unavailable" disabled onSelectionChange={onSelectionChange} />
    );
    const option = screen.getByRole("option", { name: "Unavailable" });

    fireEvent.click(option);
    fireEvent.keyDown(option, { key: " " });

    expect(option).toHaveAttribute("aria-disabled", "true");
    expect(option).toHaveAttribute("tabindex", "-1");
    expect(onSelectionChange).not.toHaveBeenCalled();
  });
});
