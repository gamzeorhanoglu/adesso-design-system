import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavigationItem } from "./NavigationItem";

describe("NavigationItem", () => {
  it("renders the canonical desktop destination with the ADS Compass icon", () => {
    render(<NavigationItem href="/services">Services</NavigationItem>);

    const item = screen.getByRole("link", { name: "Services" });
    expect(item).toHaveClass("ads-navigation-item");
    expect(item).toHaveAttribute("data-device", "desktop");
    expect(item).toHaveAttribute("data-state", "default");
    expect(item).not.toHaveAttribute("aria-current");
    expect(item.querySelector('[data-icon="CompassIcon"]')).toHaveAttribute(
      "data-size",
      "lg"
    );
  });

  it("uses the mobile icon size and exposes selected navigation semantics", () => {
    render(
      <NavigationItem href="/services" device="mobile" selected>
        Services
      </NavigationItem>
    );

    const item = screen.getByRole("link", { name: "Services" });
    expect(item).toHaveAttribute("data-device", "mobile");
    expect(item).toHaveAttribute("data-state", "selected");
    expect(item).toHaveAttribute("aria-current", "page");
    expect(item.querySelector('[data-icon="CompassIcon"]')).toHaveAttribute(
      "data-size",
      "md"
    );
  });

  it("accepts an ADS icon override without changing the component structure", () => {
    render(
      <NavigationItem href="/custom" icon={<span data-testid="custom-icon" />}>
        Custom
      </NavigationItem>
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Custom" })).toHaveClass(
      "ads-navigation-item"
    );
  });
});
