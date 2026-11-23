import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CalendarItem } from "./CalendarItem";

describe("CalendarItem", () => {
  it("renders the canonical default state", () => {
    render(<CalendarItem aria-label="September 30" label={30} />);

    const item = screen.getByRole("button", { name: "September 30" });
    expect(item).toHaveClass("ads-calendar-item");
    expect(item).toHaveAttribute("data-state", "default");
    expect(item).toHaveAttribute("aria-pressed", "false");
  });

  it("selects an enabled visible date", () => {
    const onSelect = vi.fn();
    render(
      <CalendarItem aria-label="September 30" label={30} onSelect={onSelect} />
    );

    fireEvent.click(screen.getByRole("button", { name: "September 30" }));
    expect(onSelect).toHaveBeenCalledOnce();
  });

  it("maps selected and range states to the runtime API", () => {
    const { rerender } = render(
      <CalendarItem aria-label="September 30" label={30} selected />
    );

    expect(screen.getByRole("button", { name: "September 30" })).toHaveAttribute(
      "data-state",
      "selected"
    );

    rerender(<CalendarItem aria-label="September 30" label={30} inRange />);
    expect(screen.getByRole("button", { name: "September 30" })).toHaveAttribute(
      "data-state",
      "range"
    );
  });

  it("blocks disabled and hidden dates", () => {
    const onSelect = vi.fn();
    const { rerender } = render(
      <CalendarItem
        aria-label="September 30"
        label={30}
        disabled
        onSelect={onSelect}
      />
    );

    expect(screen.getByRole("button", { name: "September 30" })).toBeDisabled();

    rerender(
      <CalendarItem
        aria-label="September 30"
        label={30}
        hidden
        onSelect={onSelect}
      />
    );
    expect(screen.queryByRole("button", { name: "September 30" })).not.toBeInTheDocument();
    expect(onSelect).not.toHaveBeenCalled();
  });
});
