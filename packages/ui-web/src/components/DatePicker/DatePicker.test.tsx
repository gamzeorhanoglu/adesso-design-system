import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DatePicker } from "./DatePicker";

const september2025 = new Date(2025, 8, 9);

describe("DatePicker", () => {
  it("renders the canonical ADS field anatomy", () => {
    const { container } = render(
      <DatePicker
        label="Tarih"
        required
        showInfo
        supportingText="GG / AA / YYYY biçiminde girin"
      />
    );

    expect(screen.getByRole("textbox", { name: /^Tarih/ })).toHaveAttribute("placeholder", "GG / AA / YYYY");
    expect(container.querySelector(".ads-field-control")).toBeInTheDocument();
    expect(container.querySelector(".ads-field-info")).toBeInTheDocument();
    expect(screen.getByText("GG / AA / YYYY biçiminde girin")).toBeInTheDocument();
  });

  it("opens the canonical ADS Calendar from its icon action", () => {
    const { container } = render(
      <DatePicker
        label="Tarih"
        locale="en-US"
        defaultDisplayedMonth={september2025}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Tarih takvimini aç" }));
    expect(container.querySelector(".ads-calendar")).toBeInTheDocument();
    expect(screen.getByRole("dialog", { name: "Tarih takvimi" })).toBeInTheDocument();
    expect(container.querySelector(".ads-date-picker")).toHaveAttribute("data-state", "open");
  });

  it("selects a date, formats the input, and closes the calendar", () => {
    const onValueChange = vi.fn();
    render(
      <DatePicker
        label="Tarih"
        locale="en-US"
        defaultOpen
        defaultDisplayedMonth={september2025}
        onValueChange={onValueChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Monday, September 15, 2025" }));
    expect(onValueChange).toHaveBeenCalledWith(new Date(2025, 8, 15));
    expect(screen.getByLabelText("Tarih")).toHaveValue("15 / 09 / 2025");
    expect(screen.queryByRole("dialog", { name: "Tarih takvimi" })).not.toBeInTheDocument();
  });

  it("parses a valid typed date and reports a cleared value", () => {
    const onValueChange = vi.fn();
    render(<DatePicker label="Tarih" onValueChange={onValueChange} />);
    const input = screen.getByLabelText("Tarih");

    fireEvent.change(input, { target: { value: "24 / 11 / 2026" } });
    expect(onValueChange).toHaveBeenLastCalledWith(new Date(2026, 10, 24));

    fireEvent.change(input, { target: { value: "" } });
    expect(onValueChange).toHaveBeenLastCalledWith(undefined);
  });

  it("supports keyboard opening and closing", () => {
    render(<DatePicker label="Tarih" />);
    const input = screen.getByLabelText("Tarih");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(screen.getByRole("dialog", { name: "Tarih takvimi" })).toBeInTheDocument();
    fireEvent.keyDown(input, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Tarih takvimi" })).not.toBeInTheDocument();
  });

  it("renders disabled and error states from the ADS contract", () => {
    const { container, rerender } = render(<DatePicker label="Tarih" disabled />);
    expect(container.querySelector(".ads-date-picker")).toHaveAttribute("data-state", "disabled");
    expect(screen.getByLabelText("Tarih")).toBeDisabled();

    rerender(<DatePicker label="Tarih" errorMessage="Geçerli bir tarih girin" />);
    expect(container.querySelector(".ads-date-picker")).toHaveAttribute("data-state", "error");
    expect(screen.getByText("Geçerli bir tarih girin")).toBeInTheDocument();
    expect(screen.getByLabelText("Tarih")).toHaveAttribute("aria-invalid", "true");
  });
});
