import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NotificationMessage } from "./NotificationMessage";

describe("NotificationMessage", () => {
  it("renders the desktop message with title, description, and ghost action", () => {
    render(<NotificationMessage title="New message" description="You have mail." />);

    expect(screen.getByRole("article")).toHaveClass("device-desktop", "state-default");
    expect(screen.getByText("New message")).toBeInTheDocument();
    expect(screen.getByText("You have mail.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button" })).toHaveClass("ads-btn", "ghost", "size-medium");
  });

  it("supports mobile, hover, and the dismiss and action handlers", () => {
    const onDismiss = vi.fn();
    const onButtonClick = vi.fn();
    render(<NotificationMessage device="mobile" onButtonClick={onButtonClick} onDismiss={onDismiss} state="hover" />);

    expect(screen.getByRole("article")).toHaveClass("device-mobile", "state-hover");
    expect(screen.getByRole("button", { name: "Button" })).toHaveClass("size-small");
    fireEvent.click(screen.getByRole("button", { name: "Dismiss notification" }));
    fireEvent.click(screen.getByRole("button", { name: "Button" }));
    expect(onDismiss).toHaveBeenCalledOnce();
    expect(onButtonClick).toHaveBeenCalledOnce();
  });

  it("hides the description", () => {
    render(<NotificationMessage showDescription={false} />);

    expect(screen.queryByText(/consectetur/)).not.toBeInTheDocument();
  });
});
