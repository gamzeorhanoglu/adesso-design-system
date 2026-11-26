import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CardExternalLink } from "./CardExternalLink";

describe("CardExternalLink", () => {
  it("renders the title, description, and ADS secondary action", () => {
    render(<CardExternalLink title="Partner resources" bodyText="Visit our partner resources." />);

    expect(screen.getByRole("article")).toHaveClass("state-default");
    expect(screen.getByRole("heading", { name: "Partner resources" })).toBeInTheDocument();
    expect(screen.getByText("Visit our partner resources.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button" })).toHaveClass("ads-btn", "secondary", "size-small");
  });

  it("supports the hover variant and optional action", () => {
    const onAction = vi.fn();
    const { rerender } = render(<CardExternalLink onAction={onAction} state="hover" />);

    expect(screen.getByRole("article")).toHaveClass("state-hover");
    fireEvent.click(screen.getByRole("button", { name: "Button" }));
    expect(onAction).toHaveBeenCalledOnce();

    rerender(<CardExternalLink showButton={false} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
