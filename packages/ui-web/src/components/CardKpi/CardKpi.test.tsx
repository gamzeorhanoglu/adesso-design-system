import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CardKpi } from "./CardKpi";

describe("CardKpi", () => {
  it("renders the single amount with value, description, and both change indicators", () => {
    render(<CardKpi metrics={[{ label: "Users", value: "1.2k", description: "Active", increase: "12%", decrease: "3%" }]} />);

    expect(screen.getByRole("article")).toHaveClass("ads-card-kpi", "amount-single");
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("1.2k")).toBeInTheDocument();
    expect(screen.getByText("12%")).toBeInTheDocument();
    expect(screen.getByText("3%")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "More options" })).toHaveLength(1);
  });

  it("renders three metrics for the multiple amount and reports which more action was used", () => {
    const onMoreClick = vi.fn();
    render(<CardKpi amount="multiple" onMoreClick={onMoreClick} />);

    expect(screen.getByRole("article")).toHaveClass("amount-multiple");
    const buttons = screen.getAllByRole("button", { name: "More options" });
    expect(buttons).toHaveLength(3);
    fireEvent.click(buttons[1]);
    expect(onMoreClick).toHaveBeenCalledWith(1);
  });

  it("hides optional parts", () => {
    render(<CardKpi showDecrease={false} showIncrease={false} showMore={false} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText("45%")).not.toBeInTheDocument();
  });
});
