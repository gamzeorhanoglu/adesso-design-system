import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ToastMessage } from "./ToastMessage";

describe("ToastMessage", () => {
  it("renders the success type with its default title and ghost action", () => {
    render(<ToastMessage />);

    expect(screen.getByRole("status")).toHaveClass("ads-toast-message", "type-success", "device-desktop");
    expect(screen.getByText("Success message")).toBeInTheDocument();
    expect(screen.getByText(/consectetur/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button" })).toHaveClass("ads-btn", "ghost", "size-medium");
  });

  it.each([
    ["warning", "Warning message", "alert"],
    ["error", "Error message", "alert"],
    ["info", "Info message", "status"]
  ] as const)("renders the %s type", (type, title, role) => {
    render(<ToastMessage type={type} />);

    expect(screen.getByRole(role)).toHaveClass(`type-${type}`);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("supports mobile and reports dismiss and action", () => {
    const onDismiss = vi.fn();
    const onButtonClick = vi.fn();
    render(<ToastMessage device="mobile" onButtonClick={onButtonClick} onDismiss={onDismiss} title="Saved" />);

    expect(screen.getByRole("status")).toHaveClass("device-mobile");
    expect(screen.getByText("Saved")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button" })).toHaveClass("size-small");
    fireEvent.click(screen.getByRole("button", { name: "Dismiss message" }));
    fireEvent.click(screen.getByRole("button", { name: "Button" }));
    expect(onDismiss).toHaveBeenCalledOnce();
    expect(onButtonClick).toHaveBeenCalledOnce();
  });

  it("hides the description and the action", () => {
    render(<ToastMessage showButton={false} showDescription={false} />);

    expect(screen.queryByText(/consectetur/)).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Button" })).not.toBeInTheDocument();
  });
});
