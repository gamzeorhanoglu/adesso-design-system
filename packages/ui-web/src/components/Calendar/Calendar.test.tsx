import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Calendar } from "./Calendar";

const september2025 = new Date(2025, 8, 9);

describe("Calendar", () => {
  it("composes the day view from ADS dropdowns and calendar items", () => {
    const { container } = render(
      <Calendar defaultValue={september2025} defaultDisplayedMonth={september2025} />
    );

    expect(container.querySelector(".ads-calendar")).toHaveAttribute("data-period", "day");
    expect(container.querySelectorAll(".ads-dropdown")).toHaveLength(2);
    expect(container.querySelectorAll(".ads-calendar-item").length).toBeGreaterThanOrEqual(35);
    expect(screen.getByRole("grid", { name: "September 2025" })).toBeInTheDocument();
    expect(screen.getAllByRole("columnheader")).toHaveLength(7);
  });

  it("selects an enabled date", () => {
    const onValueChange = vi.fn();
    render(
      <Calendar
        defaultDisplayedMonth={september2025}
        onValueChange={onValueChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Monday, September 15, 2025" }));
    expect(onValueChange).toHaveBeenCalledOnce();
    expect(onValueChange.mock.calls[0][0]).toEqual(new Date(2025, 8, 15));
  });

  it("moves to the next month with the ADS navigation control", () => {
    render(<Calendar defaultDisplayedMonth={september2025} />);

    fireEvent.click(screen.getByRole("button", { name: "Next month" }));
    expect(screen.getByRole("grid", { name: "October 2025" })).toBeInTheDocument();
  });

  it("supports range selection", () => {
    const onRangeChange = vi.fn();
    const { rerender } = render(
      <Calendar
        defaultDisplayedMonth={september2025}
        selectionMode="range"
        onRangeChange={onRangeChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Tuesday, September 9, 2025" }));
    const start = onRangeChange.mock.calls[0][0];
    rerender(
      <Calendar
        defaultDisplayedMonth={september2025}
        selectionMode="range"
        range={start}
        onRangeChange={onRangeChange}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: "Saturday, September 13, 2025" }));
    expect(onRangeChange.mock.calls[1][0]).toEqual({
      start: new Date(2025, 8, 9),
      end: new Date(2025, 8, 13)
    });
  });

  it("renders and selects the month period", () => {
    const onValueChange = vi.fn();
    const { container } = render(
      <Calendar
        period="month"
        locale="tr-TR"
        defaultDisplayedMonth={september2025}
        onValueChange={onValueChange}
      />
    );

    expect(container.querySelectorAll(".ads-calendar-month")).toHaveLength(12);
    fireEvent.click(screen.getByRole("button", { name: "Ağustos 2025" }));
    expect(onValueChange).toHaveBeenCalledOnce();
  });

  it("moves keyboard focus by day", () => {
    render(<Calendar defaultValue={september2025} defaultDisplayedMonth={september2025} />);
    const selected = screen.getByRole("button", { name: "Tuesday, September 9, 2025" });

    fireEvent.keyDown(selected, { key: "ArrowRight" });
    expect(screen.getByRole("button", { name: "Wednesday, September 10, 2025" })).toHaveFocus();
  });
});
