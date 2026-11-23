import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InfoIcon } from "./generated/InfoIcon";

describe("ADS icons", () => {
  it("renders the exact requested Figma size variant", () => {
    const { container, rerender } = render(<InfoIcon size="xs" />);
    expect(container.querySelector("svg")).toHaveAttribute("width", "16");
    expect(container.querySelector("svg")).toHaveAttribute("height", "16");

    rerender(<InfoIcon size="2xl" />);
    expect(container.querySelector("svg")).toHaveAttribute("width", "48");
    expect(container.querySelector("svg")).toHaveAttribute("height", "48");
  });

  it("is decorative by default and named when a label is supplied", () => {
    const { rerender } = render(<InfoIcon size="md" />);
    expect(document.querySelector(".ads-icon")).toHaveAttribute("aria-hidden", "true");

    rerender(<InfoIcon size="md" label="Information" />);
    expect(screen.getByRole("img", { name: "Information" })).toBeInTheDocument();
  });
});
