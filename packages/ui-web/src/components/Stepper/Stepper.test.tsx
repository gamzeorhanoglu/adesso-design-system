import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stepper } from "./Stepper";

const steps = [
  { id: "account", title: "Account" },
  { id: "details", title: "Details" },
  { id: "review", title: "Review" },
  { id: "submit", title: "Submit", disabled: true },
];

describe("Stepper", () => {
  it("derives completed, current, upcoming, and disabled states", () => {
    const { container } = render(<Stepper steps={steps} currentStep={1} />);
    const items = screen.getAllByRole("listitem");

    expect(items[0]).toHaveAttribute("data-state", "completed");
    expect(items[1]).toHaveAttribute("data-state", "active");
    expect(items[2]).toHaveAttribute("data-state", "default");
    expect(items[3]).toHaveAttribute("data-state", "disabled");
    expect(container.querySelectorAll(".ads-stepper-connector")).toHaveLength(3);
    expect(container.querySelector(".ads-stepper-connector")).toHaveAttribute(
      "data-state",
      "completed",
    );
  });

  it("clamps the current step to the published composition bounds", () => {
    render(<Stepper steps={steps.slice(0, 2)} currentStep={99} />);
    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveAttribute("data-state", "completed");
    expect(items[1]).toHaveAttribute("data-state", "active");
  });
});
