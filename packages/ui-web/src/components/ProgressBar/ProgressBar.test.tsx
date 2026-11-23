import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders the Figma variant and accessibility contract", () => {
    const { container } = render(
      <ProgressBar
        label="Upload progress"
        value={64}
        valueText="64%"
        type="green"
        size="large"
      />
    );

    const progress = screen.getByRole("progressbar", { name: "Upload progress" });
    expect(progress).toHaveAttribute("aria-valuenow", "64");
    expect(progress).toHaveAttribute("aria-valuetext", "64%");
    expect(progress).toHaveClass("type-green", "size-large");
    expect(progress).toHaveStyle("--ads-progress-value: 64%");
    expect(container.querySelector('[data-icon="InfoIcon"]')).toBeInTheDocument();
    expect(container.querySelector(".ads-progress-bar-fill")).toBeInTheDocument();
  });

  it("clamps values and supports the visibility properties", () => {
    const { container } = render(
      <ProgressBar
        label="Private progress"
        value={140}
        showInfo={false}
        showLabel={false}
        showValue={false}
      />
    );

    const progress = screen.getByRole("progressbar", { name: "Private progress" });
    expect(progress).toHaveAttribute("aria-valuenow", "100");
    expect(progress).toHaveAttribute("aria-valuetext", "100%");
    expect(container.querySelector(".ads-progress-bar-header")).not.toBeInTheDocument();
  });
});
