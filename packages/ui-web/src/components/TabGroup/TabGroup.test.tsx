import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TabGroup } from "./TabGroup";

const items = [
  { id: "overview", label: "Overview" },
  { id: "activity", label: "Activity", disabled: true },
  { id: "settings", label: "Settings" },
];

describe("TabGroup", () => {
  it("selects tabs and exposes a single tab stop", () => {
    const onSelectedIdChange = vi.fn();
    render(
      <TabGroup
        items={items}
        defaultSelectedId="overview"
        onSelectedIdChange={onSelectedIdChange}
      />,
    );

    fireEvent.click(screen.getByRole("tab", { name: "Settings" }));
    expect(onSelectedIdChange).toHaveBeenCalledWith("settings");
    expect(screen.getByRole("tab", { name: "Settings" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute("tabindex", "-1");
  });

  it("moves with arrow keys, wraps, and skips disabled tabs", () => {
    render(<TabGroup items={items} defaultSelectedId="overview" />);
    const overview = screen.getByRole("tab", { name: "Overview" });
    overview.focus();
    fireEvent.keyDown(overview, { key: "ArrowRight" });

    const settings = screen.getByRole("tab", { name: "Settings" });
    expect(settings).toHaveFocus();
    expect(settings).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(settings, { key: "ArrowRight" });
    expect(overview).toHaveFocus();
    expect(overview).toHaveAttribute("aria-selected", "true");
  });

  it("supports controlled selection", () => {
    const onSelectedIdChange = vi.fn();
    render(
      <TabGroup
        items={items}
        selectedId="overview"
        onSelectedIdChange={onSelectedIdChange}
        variant="secondary"
      />,
    );
    fireEvent.click(screen.getByRole("tab", { name: "Settings" }));
    expect(onSelectedIdChange).toHaveBeenCalledWith("settings");
    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
