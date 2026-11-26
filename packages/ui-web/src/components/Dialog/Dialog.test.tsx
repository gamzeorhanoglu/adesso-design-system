import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Dialog } from "./Dialog";

describe("Dialog", () => {
  it("renders the desktop default state with its published secondary action", () => {
    render(<Dialog title="Confirm" bodyText="Are you sure?" />);
    expect(screen.getByRole("dialog")).toHaveClass("device-desktop", "state-default", "type-pop-up");
    expect(screen.getByRole("dialog")).toHaveTextContent("Are you sure?");
    expect(screen.getAllByRole("button", { name: "Button" })).toHaveLength(1);
  });

  it("closes on Escape and gives the close control initial focus", () => {
    const onClose = vi.fn();
    render(<Dialog onClose={onClose} />);
    expect(screen.getByRole("button", { name: "Close dialog" })).toHaveFocus();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("keeps keyboard focus inside the dialog and restores it on close", () => {
    const trigger = document.createElement("button");
    document.body.append(trigger);
    trigger.focus();
    const { unmount } = render(<Dialog state="error" onClose={() => undefined} />);
    const buttons = screen.getAllByRole("button", { name: "Button" });
    buttons[1].focus();
    fireEvent.keyDown(document, { key: "Tab" });
    expect(screen.getByRole("button", { name: "Close dialog" })).toHaveFocus();
    unmount();
    expect(trigger).toHaveFocus();
    trigger.remove();
  });

  it("renders mobile error actions vertically and handles close", () => {
    const onClose = vi.fn();
    render(<Dialog device="mobile" state="error" onClose={onClose} />);
    expect(screen.getByRole("dialog")).toHaveClass("device-mobile", "state-error");
    expect(screen.getAllByRole("button", { name: "Button" })).toHaveLength(2);
    expect(screen.getAllByRole("button", { name: "Button" })[0]).toHaveClass("destructive");
    expect(document.querySelector('[data-icon="AlertTriangleIcon"]')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("uses the desktop error icon and non-modal sticky semantics", () => {
    const { rerender } = render(<Dialog state="error" />);
    expect(document.querySelector('[data-icon="AlertTriangleIcon"]')).toBeInTheDocument();
    rerender(<Dialog type="sticky" />);
    expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-modal");
  });

  it("does not render when closed", () => {
    render(<Dialog open={false} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
