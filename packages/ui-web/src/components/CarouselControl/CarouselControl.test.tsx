import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CarouselControl } from "./CarouselControl";
import { CarouselDot } from "../CarouselDot/CarouselDot";

describe("CarouselControl", () => {
  it("renders the published four-dot composition with the second item selected", () => {
    render(<CarouselControl count={4} defaultSelectedIndex={1} />);
    const control = screen.getByRole("group", { name: "Carousel navigation" });
    const dots = screen.getAllByRole("button");

    expect(control).toHaveClass("ads-carousel-control");
    expect(dots).toHaveLength(4);
    expect(dots[1]).toHaveAttribute("data-state", "selected");
    expect(dots[1]).toHaveAttribute("aria-current", "true");
    expect(dots[1]).toHaveAttribute("tabindex", "0");
    expect(dots[0]).toHaveAttribute("tabindex", "-1");
  });

  it("updates uncontrolled selection and announces the new index", () => {
    const onSelectedIndexChange = vi.fn();
    render(
      <CarouselControl
        count={4}
        defaultSelectedIndex={1}
        onSelectedIndexChange={onSelectedIndexChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Go to slide 4" }));
    expect(screen.getByRole("button", { name: "Go to slide 4" })).toHaveAttribute(
      "aria-current",
      "true"
    );
    expect(onSelectedIndexChange).toHaveBeenCalledWith(3);
  });

  it("supports controlled selection", () => {
    const onSelectedIndexChange = vi.fn();
    render(
      <CarouselControl count={3} selectedIndex={0} onSelectedIndexChange={onSelectedIndexChange} />
    );

    fireEvent.click(screen.getByRole("button", { name: "Go to slide 3" }));
    expect(onSelectedIndexChange).toHaveBeenCalledWith(2);
    expect(screen.getByRole("button", { name: "Go to slide 1" })).toHaveAttribute(
      "aria-current",
      "true"
    );
  });

  it("moves selection and focus with arrow, Home, and End keys", () => {
    render(<CarouselControl count={4} defaultSelectedIndex={1} />);
    const second = screen.getByRole("button", { name: "Go to slide 2" });
    second.focus();
    fireEvent.keyDown(second, { key: "ArrowRight" });
    expect(screen.getByRole("button", { name: "Go to slide 3" })).toHaveFocus();
    expect(screen.getByRole("button", { name: "Go to slide 3" })).toHaveAttribute(
      "aria-current",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("button", { name: "Go to slide 3" }), { key: "Home" });
    expect(screen.getByRole("button", { name: "Go to slide 1" })).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("button", { name: "Go to slide 1" }), { key: "End" });
    expect(screen.getByRole("button", { name: "Go to slide 4" })).toHaveFocus();
  });

  it("exposes CarouselDot as the canonical presentation primitive", () => {
    render(<CarouselDot aria-label="Current slide" selected />);
    expect(screen.getByRole("button", { name: "Current slide" })).toHaveClass(
      "ads-carousel-dot"
    );
  });
});
