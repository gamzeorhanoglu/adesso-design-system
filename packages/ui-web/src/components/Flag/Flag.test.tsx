import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Flag } from "./Flag";

describe("Flag", () => {
  it("uses the canonical Turkey medium variant by default", () => {
    const { container } = render(<Flag />);
    const flag = container.querySelector("img");

    expect(flag).toHaveClass("ads-flag", "size-md");
    expect(flag).toHaveAttribute("width", "24");
    expect(flag).toHaveAttribute("height", "24");
    expect(flag).toHaveAttribute("aria-hidden", "true");
    expect(flag?.getAttribute("src")).toContain("turkey-md.png");
  });

  it("supports every semantic country and large size", () => {
    render(<Flag country="saudi-arabia" size="lg" label="Saudi Arabia" />);
    const flag = screen.getByRole("img", { name: "Saudi Arabia" });

    expect(flag).toHaveClass("size-lg");
    expect(flag).toHaveAttribute("width", "32");
    expect(flag).toHaveAttribute("height", "32");
    expect(flag.getAttribute("src")).toContain("saudi-arabia-lg.png");
  });
});
