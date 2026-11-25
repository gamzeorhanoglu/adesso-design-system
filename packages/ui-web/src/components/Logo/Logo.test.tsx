import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders the exact original brand asset with its Figma aspect ratio", () => {
    render(<Logo />);
    const logo = screen.getByRole("img", { name: "adesso" });

    expect(logo).toHaveClass("ads-logo");
    expect(logo).toHaveAttribute("width", "321.462");
    expect(logo).toHaveAttribute("height", "120");
    expect(logo.getAttribute("src")).toMatch(
      /^(?:data:image\/svg\+xml|.*adesso-logo-original\.svg)/,
    );
  });

  it("accepts a contextual accessible label", () => {
    render(<Logo label="Adesso home" />);
    expect(screen.getByRole("img", { name: "Adesso home" })).toBeInTheDocument();
  });

  it("renders the published white logo variant", () => {
    render(<Logo variant="white" />);

    const logo = screen.getByRole("img", { name: "adesso" });
    expect(logo).toHaveClass("variant-white");
    expect(logo.getAttribute("src")).toMatch(
      /^(?:data:image\/svg\+xml|.*adesso-logo-white\.svg)/,
    );
  });
});
