import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { StarIcon } from "@ads/icons";
import { Chip } from "./Chip";
import { ChipGroup } from "../ChipGroup/ChipGroup";

describe("Chip", () => {
  it("renders the canonical default state and icon slot", () => {
    render(<Chip icon={<StarIcon size="md" />}>Filter</Chip>);
    const chip = screen.getByRole("button", { name: "Filter" });
    expect(chip).toHaveClass("ads-chip", "size-large");
    expect(chip).toHaveAttribute("data-state", "default");
    expect(chip).toHaveAttribute("aria-pressed", "false");
    expect(chip.querySelector(".ads-chip-icon .ads-icon")).toBeInTheDocument();
  });

  it("supports all published sizes", () => {
    const { rerender } = render(<Chip size="medium">Filter</Chip>);
    expect(screen.getByRole("button")).toHaveClass("size-medium");
    rerender(<Chip size="small">Filter</Chip>);
    expect(screen.getByRole("button")).toHaveClass("size-small");
  });

  it("toggles uncontrolled selection", () => {
    render(<Chip>Filter</Chip>);
    const chip = screen.getByRole("button", { name: "Filter" });
    fireEvent.click(chip);
    expect(chip).toHaveAttribute("data-state", "selected");
    expect(chip).toHaveAttribute("aria-pressed", "true");
  });

  it("supports controlled selection and blocks disabled changes", () => {
    const onSelectedChange = vi.fn();
    const { rerender } = render(
      <Chip selected onSelectedChange={onSelectedChange}>Filter</Chip>
    );
    expect(screen.getByRole("button")).toHaveAttribute("data-state", "selected");
    fireEvent.click(screen.getByRole("button"));
    expect(onSelectedChange).toHaveBeenCalledWith(false);

    rerender(<Chip disabled onSelectedChange={onSelectedChange}>Filter</Chip>);
    fireEvent.click(screen.getByRole("button"));
    expect(onSelectedChange).toHaveBeenCalledTimes(1);
  });

  it("composes the published five-item group", () => {
    render(
      <ChipGroup aria-label="Filters">
        {Array.from({ length: 5 }, (_, index) => (
          <Chip key={index} size="medium" defaultSelected={index === 0}>
            Filter {index + 1}
          </Chip>
        ))}
      </ChipGroup>
    );
    expect(screen.getByRole("group", { name: "Filters" })).toHaveClass("ads-chip-group");
    expect(screen.getAllByRole("button")).toHaveLength(5);
  });

  it("moves focus through a group with arrow keys", () => {
    render(
      <ChipGroup aria-label="Filters">
        <Chip size="medium">First</Chip>
        <Chip size="medium" disabled>Disabled</Chip>
        <Chip size="medium">Last</Chip>
      </ChipGroup>
    );
    const first = screen.getByRole("button", { name: "First" });
    first.focus();
    fireEvent.keyDown(first, { key: "ArrowRight" });
    expect(screen.getByRole("button", { name: "Last" })).toHaveFocus();
  });
});
