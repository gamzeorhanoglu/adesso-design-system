import "@testing-library/jest-dom/vitest";
import { StarIcon } from "@ads/icons";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SidebarItem } from "./SidebarItem";

describe("SidebarItem", () => {
  it("renders the published content properties with ADS primitives", () => {
    const { container } = render(
      <SidebarItem
        href="#reports"
        icon={<StarIcon size="sm" />}
        badge="3"
        showArrow
        theme="dark"
      >
        Reports
      </SidebarItem>,
    );

    const item = screen.getByRole("link", { name: /Reports 3/ });
    expect(item).toHaveAttribute("href", "#reports");
    expect(item).toHaveAttribute("data-theme", "dark");
    expect(container.querySelector('[data-icon="StarIcon"]')).toBeInTheDocument();
    expect(container.querySelector(".ads-tag")).toHaveClass(
      "variant-solid",
      "color-red",
      "size-small",
    );
    expect(container.querySelector(".ads-sidebar-item-arrow")).toBeInTheDocument();
  });

  it("exposes active, error, disabled, and collapsed states", () => {
    const { rerender } = render(<SidebarItem active>Dashboard</SidebarItem>);
    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute(
      "aria-current",
      "page",
    );

    rerender(<SidebarItem error>Dashboard</SidebarItem>);
    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute(
      "data-state",
      "error",
    );

    rerender(<SidebarItem disabled>Dashboard</SidebarItem>);
    expect(screen.getByText("Dashboard").closest("a")).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    rerender(<SidebarItem showText={false} aria-label="Dashboard">Dashboard</SidebarItem>);
    expect(screen.getByRole("link", { name: "Dashboard" })).not.toHaveTextContent("Dashboard");
  });

  it("prevents disabled activation", () => {
    const onClick = vi.fn();
    render(<SidebarItem disabled onClick={onClick}>Disabled</SidebarItem>);
    fireEvent.click(screen.getByText("Disabled"));
    expect(onClick).not.toHaveBeenCalled();
  });
});
