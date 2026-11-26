import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tab } from "./Tab";

describe("Tab", () => {
  it("exposes the published variant, size, and selected state", () => {
    render(
      <Tab variant="secondary" size="large" selected>
        Overview
      </Tab>,
    );
    const tab = screen.getByRole("tab", { name: "Overview" });
    expect(tab).toHaveAttribute("data-variant", "secondary");
    expect(tab).toHaveAttribute("data-size", "large");
    expect(tab).toHaveAttribute("data-state", "selected");
    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  it("uses the disabled state as the highest-priority state", () => {
    render(<Tab selected disabled>Overview</Tab>);
    const tab = screen.getByRole("tab", { name: "Overview" });
    expect(tab).toBeDisabled();
    expect(tab).toHaveAttribute("data-state", "disabled");
  });
});
