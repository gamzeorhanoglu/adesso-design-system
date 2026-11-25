import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Sidebar } from "./Sidebar";

const items = [
  { id: "dashboard", label: "Dashboard", href: "#dashboard", active: true },
  { id: "reports", label: "Reports", href: "#reports", badge: "2" },
];

describe("Sidebar", () => {
  it("composes the open Figma variant from ADS components", () => {
    const { container } = render(<Sidebar items={items} />);
    const sidebar = container.querySelector(".ads-sidebar");

    expect(sidebar).toHaveAttribute("data-state", "open");
    expect(sidebar).toHaveAttribute("data-theme", "light");
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("img", { name: "John Doe profile" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Collapse sidebar" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("img", { name: "adesso" })).toHaveClass("variant-original");
  });

  it("toggles the collapsed Figma variant through the focused state hook", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <Sidebar items={items} defaultOpen={false} theme="dark" onOpenChange={onOpenChange} />,
    );

    expect(container.querySelector(".ads-sidebar")).toHaveAttribute("data-state", "closed");
    expect(screen.getByRole("img", { name: "adesso" })).toHaveClass("variant-favicon-white");
    expect(screen.getByRole("link", { name: "Dashboard" })).not.toHaveTextContent("Dashboard");

    fireEvent.click(screen.getByRole("button", { name: "Expand sidebar" }));
    expect(container.querySelector(".ads-sidebar")).toHaveAttribute("data-state", "open");
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("supports controlled state and the profile visibility property", () => {
    const { container } = render(<Sidebar items={items} open={false} showProfile={false} />);
    fireEvent.click(screen.getByRole("button", { name: "Expand sidebar" }));
    expect(container.querySelector(".ads-sidebar")).toHaveAttribute("data-state", "closed");
    expect(container.querySelector(".ads-sidebar-profile")).not.toBeInTheDocument();
  });
});
