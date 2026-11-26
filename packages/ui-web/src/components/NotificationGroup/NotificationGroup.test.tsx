import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NotificationList } from "../NotificationList/NotificationList";
import { NotificationGroup, NotificationGroupHeading } from "./NotificationGroup";

describe("NotificationGroup", () => {
  it("renders the header, unread information, tabs, items, and footer", () => {
    render(
      <NotificationGroup>
        <NotificationGroupHeading>Bugün</NotificationGroupHeading>
        <NotificationList title="First" />
      </NotificationGroup>
    );

    expect(screen.getByRole("region", { name: "Bildirimler" })).toHaveClass("ads-notification-group");
    expect(screen.getByRole("heading", { name: "Bildirimler" })).toBeInTheDocument();
    expect(screen.getByText("3 okunmamış bildirim")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tümü" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("heading", { name: "Bugün" })).toBeInTheDocument();
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tümünü okundu işaretle" })).toHaveClass("ads-btn", "outline");
    expect(screen.getByRole("button", { name: "Tüm Bildirimleri Gör" })).toHaveClass("ads-btn", "ghost");
  });

  it("reports close, mark-all-read, footer, and tab changes", () => {
    const onClose = vi.fn();
    const onMarkAllRead = vi.fn();
    const onFooterClick = vi.fn();
    const onSelectedTabChange = vi.fn();
    render(
      <NotificationGroup
        onClose={onClose}
        onFooterClick={onFooterClick}
        onMarkAllRead={onMarkAllRead}
        onSelectedTabChange={onSelectedTabChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Close notifications" }));
    fireEvent.click(screen.getByRole("button", { name: "Tümünü okundu işaretle" }));
    fireEvent.click(screen.getByRole("button", { name: "Tüm Bildirimleri Gör" }));
    fireEvent.click(screen.getByRole("tab", { name: "Okunmamış (3)" }));
    expect(onClose).toHaveBeenCalledOnce();
    expect(onMarkAllRead).toHaveBeenCalledOnce();
    expect(onFooterClick).toHaveBeenCalledOnce();
    expect(onSelectedTabChange).toHaveBeenCalledWith("unread");
  });

  it("hides the unread information and tabs", () => {
    render(<NotificationGroup showTab={false} showUnreadInformation={false} />);

    expect(screen.queryByText("3 okunmamış bildirim")).not.toBeInTheDocument();
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
  });
});
