import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavigationGroup } from "./NavigationGroup";

describe("NavigationGroup", () => {
  it("composes the published desktop header and four ADS accordions", () => {
    render(<NavigationGroup />);

    const group = document.querySelector(".ads-navigation-group");
    expect(group).toHaveAttribute("data-device", "desktop");
    expect(document.querySelectorAll(".ads-accordion")).toHaveLength(4);
    expect(screen.getByRole("button", { name: "Close navigation" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Back to top" })).toBeVisible();
  });

  it("closes through the focused disclosure hook", () => {
    const onOpenChange = vi.fn();
    render(<NavigationGroup onOpenChange={onOpenChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Close navigation" }));
    expect(document.querySelector(".ads-navigation-group")).not.toBeInTheDocument();
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("forwards the back-to-top action", () => {
    const onBackToTop = vi.fn();
    render(<NavigationGroup onBackToTop={onBackToTop} />);

    fireEvent.click(screen.getByRole("button", { name: "Back to top" }));
    expect(onBackToTop).toHaveBeenCalledOnce();
  });
});
