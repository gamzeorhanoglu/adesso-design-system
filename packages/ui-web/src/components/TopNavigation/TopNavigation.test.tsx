import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import { TopNavigation } from "./TopNavigation";

describe("TopNavigation", () => {
  it("composes the published desktop navigation from ADS primitives", () => {
    render(<TopNavigation device="desktop" />);

    const header = screen.getByRole("banner");
    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(header).toHaveClass("ads-top-navigation");
    expect(header).toHaveAttribute("data-device", "desktop");
    expect(
      screen.getByRole("link", { name: "Adesso home" }).querySelector(".ads-logo")
    ).toBeInTheDocument();
    expect(within(navigation).getAllByRole("link")).toHaveLength(3);
    expect(screen.getByRole("button", { name: "Language: Türkçe" })).toBeInTheDocument();
  });

  it("accepts connected NavigationItem children for product destinations", () => {
    render(
      <TopNavigation device="desktop">
        <NavigationItem href="/one">One</NavigationItem>
        <NavigationItem href="/two" selected>Two</NavigationItem>
      </TopNavigation>
    );

    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(within(navigation).getAllByRole("link")).toHaveLength(2);
    expect(within(navigation).getByRole("link", { name: "Two" })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("exposes the mobile menu trigger without owning menu state", () => {
    const onMenuClick = vi.fn();
    render(
      <TopNavigation
        device="mobile"
        menuLabel="Open main menu"
        menuControls="mobile-menu"
        menuExpanded
        onMenuClick={onMenuClick}
      />
    );

    const button = screen.getByRole("button", { name: "Open main menu" });
    expect(screen.getByRole("banner")).toHaveAttribute("data-device", "mobile");
    expect(button).toHaveAttribute("aria-controls", "mobile-menu");
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button.querySelector('[data-icon="MenuIcon"]')).toHaveAttribute(
      "data-size",
      "lg"
    );

    fireEvent.click(button);
    expect(onMenuClick).toHaveBeenCalledOnce();
  });
});
