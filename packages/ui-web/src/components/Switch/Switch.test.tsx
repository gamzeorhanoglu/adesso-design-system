import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("uses a native checkbox with the switch role", () => {
    const onChange = vi.fn();
    render(<Switch aria-label="Email notifications" onChange={onChange} />);
    const control = screen.getByRole("switch", { name: "Email notifications" });

    fireEvent.click(control);

    expect(control).toBeChecked();
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("supports the Figma desktop size by default", () => {
    const { container } = render(<Switch aria-label="Desktop switch" />);
    expect(container.querySelector(".ads-switch")).toHaveClass("size-desktop");
  });

  it("supports the Figma mobile size", () => {
    const { container } = render(<Switch aria-label="Mobile switch" size="mobile" />);
    expect(container.querySelector(".ads-switch")).toHaveClass("size-mobile");
  });

  it("maps the disabled state to the native control", () => {
    render(<Switch aria-label="Unavailable switch" disabled />);
    expect(screen.getByRole("switch", { name: "Unavailable switch" })).toBeDisabled();
  });
});
