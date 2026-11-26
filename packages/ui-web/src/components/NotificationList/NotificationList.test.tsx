import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NotificationList } from "./NotificationList";

describe("NotificationList", () => {
  it("renders an unread desktop notification with a ghost action and unread indicator", () => {
    const { container } = render(<NotificationList title="Update" description="Details" date="01.01.2027" />);

    expect(screen.getByRole("article")).toHaveClass("device-desktop", "state-default", "is-unread");
    expect(screen.getByText("Update")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("01.01.2027")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button" })).toHaveClass("ads-btn", "ghost");
    expect(container.querySelector(".ads-notification-list-dot")).toBeInTheDocument();
  });

  it("opens the desktop actions and reports read and delete actions", () => {
    const onDelete = vi.fn();
    const onToggleRead = vi.fn();
    const onOpenChange = vi.fn();
    render(<NotificationList onDelete={onDelete} onOpenChange={onOpenChange} onToggleRead={onToggleRead} />);

    fireEvent.click(screen.getByRole("button", { name: "Show actions" }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole("article")).toHaveClass("state-open");

    fireEvent.click(screen.getByRole("button", { name: "Mark as read" }));
    fireEvent.click(screen.getByRole("button", { name: "Delete notification" }));
    expect(onToggleRead).toHaveBeenCalledOnce();
    expect(onDelete).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByRole("button", { name: "Close actions" }));
    expect(screen.getByRole("article")).toHaveClass("state-default");
  });

  it("renders the read state without an unread indicator and disables the action", () => {
    const { container } = render(<NotificationList read />);

    expect(screen.getByRole("article")).toHaveClass("state-read", "is-read");
    expect(screen.getByRole("button", { name: "Button" })).toBeDisabled();
    expect(container.querySelector(".ads-notification-list-dot")).not.toBeInTheDocument();
  });

  it("reveals the mobile actions by swipe and with the keyboard", () => {
    render(<NotificationList device="mobile" />);
    const article = screen.getByRole("article");

    expect(screen.queryByRole("button", { name: "Show actions" })).not.toBeInTheDocument();
    // jsdom has no PointerEvent, so pointer events are sent as MouseEvents to keep clientX.
    fireEvent(article, new MouseEvent("pointerdown", { bubbles: true, clientX: 200 }));
    fireEvent(article, new MouseEvent("pointerup", { bubbles: true, clientX: 100 }));
    expect(article).toHaveClass("state-open");
    expect(screen.getByRole("button", { name: "Mark as read" })).toBeInTheDocument();

    fireEvent.keyDown(article, { key: "ArrowRight" });
    expect(article).toHaveClass("state-default");
    fireEvent.keyDown(article, { key: "ArrowLeft" });
    expect(article).toHaveClass("state-open");
  });

  it("hides optional parts", () => {
    render(<NotificationList showButton={false} showDescription={false} showIcon={false} />);

    expect(screen.queryByRole("button", { name: "Button" })).not.toBeInTheDocument();
    expect(screen.queryByText("15.10.2026")).not.toBeInTheDocument();
  });
});
