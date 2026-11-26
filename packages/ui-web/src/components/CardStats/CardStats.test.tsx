import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardStats } from "./CardStats";

describe("CardStats", () => {
  it("renders the default label, value, and caption", () => {
    render(<CardStats />);

    expect(screen.getByRole("article")).toHaveClass("ads-card-stats");
    expect(screen.getAllByText("LOREM IPSUM")).toHaveLength(2);
    expect(screen.getByText("999.99")).toBeInTheDocument();
  });

  it("renders custom content", () => {
    render(<CardStats caption="Countries" label="Reach" value="42" />);

    expect(screen.getByText("Reach")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.getByText("Countries")).toBeInTheDocument();
  });
});
