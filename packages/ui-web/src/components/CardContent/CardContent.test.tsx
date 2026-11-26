import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CardContent } from "./CardContent";

describe("CardContent", () => {
  it("renders the desktop content card with its ADS ghost action", () => {
    render(<CardContent title="Services" bodyText="Explore our services." />);

    expect(screen.getByRole("article")).toHaveClass("device-desktop", "state-default");
    expect(screen.getByRole("heading", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByText("Explore our services.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button" })).toHaveClass("ads-btn", "ghost", "size-large");
    expect(document.querySelector(".ads-card-content-image img")).toHaveAttribute("src");
  });

  it("supports mobile sizing and independently hides image, text, and action", () => {
    render(<CardContent device="mobile" showImage={false} showText={false} showButton={false} />);

    expect(screen.getByRole("article")).toHaveClass("device-mobile");
    expect(screen.getByRole("heading", { name: "Lorem Ipsum" })).toBeInTheDocument();
    expect(document.querySelector(".ads-card-content-image")).not.toBeInTheDocument();
    expect(screen.queryByText(/Lorem ipsum dolor sit amet/)).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("forwards the CTA action and renders the disabled state accessibly", () => {
    const onAction = vi.fn();
    const { rerender } = render(<CardContent onAction={onAction} />);

    fireEvent.click(screen.getByRole("button", { name: "Button" }));
    expect(onAction).toHaveBeenCalledOnce();

    rerender(<CardContent state="disabled" />);
    expect(screen.getByRole("article")).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByRole("button", { name: "Button" })).toBeDisabled();
    expect(document.querySelector(".ads-card-content-image-overlay")).toBeInTheDocument();
  });
});
