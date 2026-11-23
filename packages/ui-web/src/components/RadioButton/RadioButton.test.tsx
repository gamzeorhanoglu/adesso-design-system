import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  it("uses a native accessible radio control", () => {
    render(<RadioButton aria-label="First option" name="choice" value="first" />);
    const radio = screen.getByRole("radio", { name: "First option" });

    fireEvent.click(radio);

    expect(radio).toBeChecked();
    expect(radio).toHaveAttribute("name", "choice");
    expect(radio).toHaveAttribute("value", "first");
  });

  it("supports native radio-group selection behavior", () => {
    render(
      <>
        <RadioButton aria-label="One" name="group" />
        <RadioButton aria-label="Two" name="group" />
      </>
    );
    const first = screen.getByRole("radio", { name: "One" });
    const second = screen.getByRole("radio", { name: "Two" });

    fireEvent.click(first);
    fireEvent.click(second);

    expect(first).not.toBeChecked();
    expect(second).toBeChecked();
  });

  it("maps disabled and error states to the native control", () => {
    const { container } = render(
      <RadioButton aria-label="Unavailable option" disabled error />
    );
    const radio = screen.getByRole("radio", { name: "Unavailable option" });

    expect(radio).toBeDisabled();
    expect(radio).toHaveAttribute("aria-invalid", "true");
    expect(container.querySelector(".ads-radio")).toHaveAttribute("data-error", "true");
  });
});
