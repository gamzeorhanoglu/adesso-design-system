import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  it("associates the persistent label and supporting text", () => {
    render(
      <TextArea
        label="Açıklama"
        supportingText="En fazla 500 karakter"
        placeholder="Açıklamanızı yazın"
      />
    );

    expect(screen.getByLabelText("Açıklama")).toHaveAccessibleDescription(
      "En fazla 500 karakter"
    );
  });

  it("derives focus and filled states from runtime behavior", () => {
    const { container } = render(<TextArea label="Not" />);
    const textarea = screen.getByLabelText("Not");
    const field = container.querySelector(".ads-textarea");

    fireEvent.focus(textarea);
    expect(field).toHaveAttribute("data-state", "focus");
    fireEvent.change(textarea, { target: { value: "Uzun bir not" } });
    fireEvent.blur(textarea);
    expect(field).toHaveAttribute("data-state", "filled");
  });

  it("supports controlled values and reports changes", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <TextArea label="Not" value="İlk değer" onChange={onChange} />
    );
    const textarea = screen.getByLabelText("Not");

    fireEvent.change(textarea, { target: { value: "Yeni değer" } });
    expect(onChange).toHaveBeenCalledOnce();
    expect(textarea).toHaveValue("İlk değer");

    rerender(<TextArea label="Not" value="Yeni değer" onChange={onChange} />);
    expect(textarea).toHaveValue("Yeni değer");
  });

  it("renders the ADS error state and alert icon", () => {
    const { container } = render(
      <TextArea
        label="Açıklama"
        supportingText="Gerekli alan"
        errorMessage="Açıklama boş bırakılamaz"
      />
    );
    const textarea = screen.getByLabelText("Açıklama");

    expect(container.querySelector(".ads-textarea")).toHaveAttribute("data-state", "error");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(textarea).toHaveAccessibleDescription("Gerekli alan Açıklama boş bırakılamaz");
    expect(container.querySelector('[data-icon="AlertTriangleIcon"]')).toBeInTheDocument();
  });

  it("uses the exact optional resize handle and supports hidden labels", () => {
    const { container, rerender } = render(
      <TextArea label="Açıklama" showLabel={false} showResizeHandle />
    );

    expect(screen.getByRole("textbox", { name: "Açıklama" })).toBeInTheDocument();
    expect(container.querySelector(".ads-textarea-resize-handle")).toBeInTheDocument();
    expect(container.querySelector(".ads-textarea")).toHaveAttribute("data-resizable", "true");

    rerender(<TextArea label="Açıklama" showResizeHandle={false} />);
    expect(container.querySelector(".ads-textarea-resize-handle")).not.toBeInTheDocument();
    expect(container.querySelector(".ads-textarea")).not.toHaveAttribute("data-resizable");
  });

  it("resizes vertically through the focused behavior hook", () => {
    const { container } = render(<TextArea label="Açıklama" />);
    const textarea = screen.getByLabelText("Açıklama");
    const handle = container.querySelector(".ads-textarea-resize-handle");
    vi.spyOn(textarea, "getBoundingClientRect").mockReturnValue({
      bottom: 120,
      height: 120,
      left: 0,
      right: 408,
      top: 0,
      width: 408,
      x: 0,
      y: 0,
      toJSON: () => ({})
    });

    const pointerDown = new Event("pointerdown", { bubbles: true });
    Object.defineProperty(pointerDown, "clientY", { value: 120 });
    fireEvent(handle!, pointerDown);
    const pointerMove = new Event("pointermove");
    Object.defineProperty(pointerMove, "clientY", { value: 160 });
    fireEvent(window, pointerMove);
    fireEvent.pointerUp(window);

    expect(textarea).toHaveStyle({ height: "160px" });
  });

  it("renders disabled and information states from ADS primitives", () => {
    const { container } = render(<TextArea label="Açıklama" disabled showInfo />);
    expect(screen.getByLabelText("Açıklama")).toBeDisabled();
    expect(container.querySelector(".ads-textarea")).toHaveAttribute("data-state", "disabled");
    expect(container.querySelector('[data-icon="InfoIcon"]')).toBeInTheDocument();
  });
});
