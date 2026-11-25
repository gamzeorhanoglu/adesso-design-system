import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("maps the published desktop and mobile contracts", () => {
    const { rerender } = render(<Accordion title="Lorem Ipsum" />);
    const desktop = screen.getByText("Lorem Ipsum").closest(".ads-accordion");
    expect(desktop).toHaveAttribute("data-device", "desktop");
    expect(desktop).toHaveAttribute("data-open", "false");

    rerender(<Accordion title="Lorem Ipsum" device="mobile" defaultOpen />);
    expect(screen.getByText("Lorem Ipsum").closest(".ads-accordion")).toHaveAttribute(
      "data-device",
      "mobile",
    );
  });

  it("owns controlled and uncontrolled disclosure behavior in its hook", () => {
    const onOpenChange = vi.fn();
    render(
      <Accordion title="Details" onOpenChange={onOpenChange}>
        Hidden content
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Details" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region")).toHaveTextContent("Hidden content");
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("can omit the published icon slot", () => {
    render(<Accordion title="Without icon" showIcon={false} />);
    expect(document.querySelector(".ads-accordion-icon")).not.toBeInTheDocument();
  });
});
