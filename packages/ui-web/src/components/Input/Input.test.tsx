import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("associates the persistent label with the native input", () => {
    render(<Input label="Phone number" supportingText="Include country code" />);
    expect(screen.getByLabelText("Phone number")).toHaveAccessibleDescription(
      "Include country code"
    );
  });

  it("derives focus and filled states from runtime behavior", () => {
    const { container } = render(<Input label="Name" />);
    const input = screen.getByLabelText("Name");
    const field = container.querySelector(".ads-field");

    fireEvent.focus(input);
    expect(field).toHaveAttribute("data-state", "focus");
    fireEvent.change(input, { target: { value: "Gamze" } });
    fireEvent.blur(input);
    expect(field).toHaveAttribute("data-state", "filled");
  });

  it("derives error state and accessible error description", () => {
    const { container } = render(
      <Input label="Email" errorMessage="Enter a valid email" />
    );
    const input = screen.getByLabelText("Email");
    expect(container.querySelector(".ads-field")).toHaveAttribute("data-state", "error");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Enter a valid email");
    expect(container.querySelector('[data-icon="AlertTriangleIcon"]')).toBeInTheDocument();
  });

  it("uses the canonical ADS information icon", () => {
    const { container } = render(<Input label="Account" showInfo />);
    expect(container.querySelector('[data-icon="InfoIcon"]')).toBeInTheDocument();
  });

  it("clears an uncontrolled value and restores input focus", () => {
    const onClear = vi.fn();
    render(<Input label="Name" defaultValue="Gamze" onClear={onClear} />);
    const input = screen.getByLabelText("Name");

    fireEvent.click(screen.getByRole("button", { name: "Clear input" }));

    expect(input).toHaveValue("");
    expect(input).toHaveFocus();
    expect(onClear).toHaveBeenCalledOnce();
    expect(screen.queryByRole("button", { name: "Clear input" })).not.toBeInTheDocument();
  });

  it("toggles masked input visibility with canonical ADS icons", () => {
    const { container } = render(
      <Input label="Password" typeVariant="masked" defaultValue="secret" />
    );
    const input = screen.getByLabelText("Password");
    const toggle = screen.getByRole("button", { name: "Show password" });

    expect(input).toHaveAttribute("type", "password");
    expect(container.querySelector('[data-icon="EyeIcon"]')).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(input).toHaveAttribute("type", "text");
    expect(screen.getByRole("button", { name: "Hide password" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(container.querySelector('[data-icon="EyeOffIcon"]')).toBeInTheDocument();
  });

  it("owns country selection state and reports changes", () => {
    const onCountryChange = vi.fn();
    render(
      <Input
        label="Phone"
        countryOptions={[
          { label: "Türkiye +90", value: "TR" },
          { label: "Germany +49", value: "DE" }
        ]}
        defaultCountryValue="TR"
        onCountryChange={onCountryChange}
      />
    );
    const selection = screen.getByRole("combobox", { name: "Country selection" });

    expect(selection).toHaveValue("TR");
    fireEvent.change(selection, { target: { value: "DE" } });
    expect(selection).toHaveValue("DE");
    expect(onCountryChange).toHaveBeenCalledWith("DE");
  });

  it("renders units as canonical input content", () => {
    render(<Input label="Weight" units="kg" />);
    expect(screen.getByText("kg")).toBeInTheDocument();
  });
});

