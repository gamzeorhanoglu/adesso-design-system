import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("uses a native accessible checkbox and reports changes", () => {
    const onChange = vi.fn();
    render(<Checkbox aria-label="Accept terms" onChange={onChange} />);
    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("exposes and updates the native indeterminate state", () => {
    const { rerender } = render(
      <Checkbox aria-label="Select all" indeterminate />
    );
    const checkbox = screen.getByRole("checkbox", { name: "Select all" });

    expect(checkbox).toHaveProperty("indeterminate", true);
    expect(checkbox).toHaveAttribute("aria-checked", "mixed");

    rerender(<Checkbox aria-label="Select all" indeterminate={false} />);
    expect(checkbox).toHaveProperty("indeterminate", false);
  });

  it("maps disabled and error states to the native control", () => {
    const { container } = render(
      <Checkbox aria-label="Unavailable option" disabled error />
    );
    const checkbox = screen.getByRole("checkbox", { name: "Unavailable option" });

    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
    expect(container.querySelector(".ads-checkbox")).toHaveAttribute("data-error", "true");
  });

  it("uses canonical ADS check and minus icons", () => {
    const { container } = render(<Checkbox aria-label="Item" />);
    expect(container.querySelector('[data-icon="CheckIcon"]')).toBeInTheDocument();
    expect(container.querySelector('[data-icon="MinusIcon"]')).toBeInTheDocument();
  });
});
