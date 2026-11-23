import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SwitchGroup } from "./SwitchGroup";

describe("SwitchGroup", () => {
  it("composes the ADS desktop Switch with label and description", () => {
    const onChange = vi.fn();
    const { container } = render(
      <SwitchGroup
        label="Product updates"
        description="Receive release announcements"
        onChange={onChange}
      />
    );
    const control = screen.getByRole("switch", { name: "Product updates" });

    fireEvent.click(screen.getByText("Product updates"));

    expect(control).toBeChecked();
    expect(control).toHaveAccessibleDescription("Receive release announcements");
    expect(container.querySelector(".ads-switch")).toHaveClass("size-desktop");
    expect(onChange).toHaveBeenCalledOnce();
  });
});
