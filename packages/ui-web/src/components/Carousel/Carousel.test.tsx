import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
  it("renders the desktop slide with title, subtitle, secondary action, and position control", () => {
    render(<Carousel imageAlt="" imageSrc="/slide.png" subtitle="Subtitle" title="Headline" />);

    expect(screen.getByRole("region", { name: /./ })).toHaveClass("ads-carousel", "device-desktop");
    expect(screen.getByRole("heading", { name: "Headline" })).toBeInTheDocument();
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Lorem Ipsum" })).toHaveClass("ads-btn", "secondary", "size-medium");
    expect(screen.getByRole("group", { name: "Carousel navigation" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /Go to slide/ })).toHaveLength(4);
  });

  it("supports mobile, the slide change callback, and the action", () => {
    const onSelectedIndexChange = vi.fn();
    const onButtonClick = vi.fn();
    render(
      <Carousel count={3} device="mobile" onButtonClick={onButtonClick} onSelectedIndexChange={onSelectedIndexChange} />
    );

    expect(screen.getByRole("region", { name: /./ })).toHaveClass("device-mobile");
    expect(screen.getByRole("button", { name: "Lorem Ipsum" })).toHaveClass("size-small");
    fireEvent.click(screen.getByRole("button", { name: "Go to slide 2" }));
    fireEvent.click(screen.getByRole("button", { name: "Lorem Ipsum" }));
    expect(onSelectedIndexChange).toHaveBeenCalledWith(1);
    expect(onButtonClick).toHaveBeenCalledOnce();
  });

  it("hides the action and uses the bundled slide image unless one is supplied", () => {
    const { container, rerender } = render(<Carousel showButton={false} />);

    expect(screen.queryByRole("button", { name: "Lorem Ipsum" })).not.toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("src");

    rerender(<Carousel imageSrc="/custom.png" showButton={false} />);
    expect(container.querySelector("img")).toHaveAttribute("src", "/custom.png");
  });
});
