import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("maps variant and size to canonical ADS classes", () => {
    render(<Button variant="primary" size="large">Continue</Button>);
    expect(screen.getByRole("button", { name: "Continue" })).toHaveClass(
      "ads-btn",
      "primary",
      "size-large"
    );
  });

  it("preserves the native disabled state", () => {
    render(<Button disabled>Continue</Button>);
    expect(screen.getByRole("button", { name: "Continue" })).toBeDisabled();
  });

  it("supports an accessible icon-only control", () => {
    render(
      <Button variant="icon-only" aria-label="Open menu">
        <svg aria-hidden="true" />
      </Button>
    );
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveClass("icon-only");
  });

  it("marks icon placement for the Figma-aligned ghost spacing contract", () => {
    render(
      <Button variant="ghost" size="large" leadingIcon={<svg aria-hidden="true" />}>
        Learn more
      </Button>
    );
    expect(screen.getByRole("button", { name: "Learn more" })).toHaveClass(
      "ghost",
      "size-large",
      "has-leading-icon"
    );
  });
});

