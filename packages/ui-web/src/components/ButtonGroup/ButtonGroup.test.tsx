import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../Button/Button";
import { ButtonGroup } from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("groups existing ADS buttons with an accessible name", () => {
    render(
      <ButtonGroup aria-label="Form actions">
        <Button variant="secondary">Back</Button>
        <Button>Continue</Button>
      </ButtonGroup>
    );

    const group = screen.getByRole("group", { name: "Form actions" });
    expect(group).toHaveClass("ads-button-group", "orientation-horizontal");
    expect(group).toHaveAttribute("aria-orientation", "horizontal");
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("supports the canonical vertical composition", () => {
    render(
      <ButtonGroup aria-label="Page actions" orientation="vertical">
        <Button size="large">Continue</Button>
        <Button variant="secondary" size="large">Back</Button>
        <Button variant="ghost" size="large">Cancel</Button>
      </ButtonGroup>
    );

    expect(screen.getByRole("group", { name: "Page actions" })).toHaveClass(
      "orientation-vertical"
    );
  });
});
