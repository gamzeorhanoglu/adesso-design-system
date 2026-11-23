import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("renders the complete Figma content contract", () => {
    render(
      <Tooltip title="Title" bodyText="Lorem ipsum" color="dark" placement="right" />
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveClass("ads-tooltip", "color-dark", "placement-right");
    expect(tooltip).toHaveTextContent("Title");
    expect(tooltip).toHaveTextContent("Lorem ipsum");
  });

  it("omits the optional body without hiding the title", () => {
    render(<Tooltip title="Title only" />);

    expect(screen.getByRole("tooltip")).toHaveTextContent("Title only");
    expect(document.querySelector(".ads-tooltip-body")).not.toBeInTheDocument();
  });
});
