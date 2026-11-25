import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Step } from "./Step";

describe("Step", () => {
  it.each(["default", "active", "completed", "completed-active", "disabled"] as const)(
    "renders the desktop %s state",
    (state) => {
      const { container } = render(<Step state={state} number={2} title="Details" />);
      const step = screen.getByRole("listitem");
      expect(step).toHaveAttribute("data-device", "desktop");
      expect(step).toHaveAttribute("data-state", state);
      expect(screen.getByText("Details")).toBeInTheDocument();
      const checkIcon = container.querySelector('[data-icon="CheckIcon"]');
      if (state.startsWith("completed")) expect(checkIcon).toBeInTheDocument();
      else expect(checkIcon).not.toBeInTheDocument();
    },
  );

  it("renders the compact mobile contract and optional title", () => {
    const { container } = render(
      <Step device="mobile" state="completed" showTitle={false} title="Done" />,
    );
    expect(screen.getByRole("listitem")).toHaveAttribute("data-device", "mobile");
    expect(screen.queryByText("Done")).not.toBeInTheDocument();
    expect(container.querySelector('[data-icon="CheckIcon"]')).toHaveAttribute(
      "data-size",
      "md",
    );
  });

  it("exposes current and disabled semantics", () => {
    const { rerender } = render(<Step state="active" />);
    expect(screen.getByRole("listitem")).toHaveAttribute("aria-current", "step");
    rerender(<Step state="disabled" />);
    expect(screen.getByRole("listitem")).toHaveAttribute("aria-disabled", "true");
  });
});
