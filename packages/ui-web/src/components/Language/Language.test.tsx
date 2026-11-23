import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Language, type LanguageOption } from "./Language";

const options: LanguageOption[] = [
  { country: "turkey", label: "Türkçe", value: "tr" },
  { country: "usa", label: "English", value: "en" },
  { country: "germany", label: "Deutsch", value: "de", disabled: true }
];

describe("Language", () => {
  it("renders the selected ADS flag and disclosure trigger", () => {
    render(<Language aria-label="Language" options={options} />);

    const trigger = screen.getByRole("button", { name: "Language: Türkçe" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger.querySelector(".ads-flag")).toHaveClass("size-lg");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("opens the ADS DropdownList and selects a language", () => {
    const onOpenChange = vi.fn();
    const onValueChange = vi.fn();
    render(
      <Language
        aria-label="Language"
        options={options}
        onOpenChange={onOpenChange}
        onValueChange={onValueChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Language: Türkçe" }));

    const listbox = screen.getByRole("listbox", { name: "Languages" });
    expect(listbox).toHaveClass("ads-dropdown-list-options");
    expect(screen.getAllByRole("option")).toHaveLength(3);

    fireEvent.click(screen.getByRole("option", { name: "English" }));

    expect(onValueChange).toHaveBeenCalledWith("en");
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(screen.getByRole("button", { name: "Language: English" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("supports keyboard opening and closing", () => {
    render(<Language aria-label="Language" options={options} />);
    const trigger = screen.getByRole("button", { name: "Language: Türkçe" });

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("does not select disabled options", () => {
    const onValueChange = vi.fn();
    render(
      <Language
        aria-label="Language"
        options={options}
        defaultOpen
        onValueChange={onValueChange}
      />
    );

    fireEvent.click(screen.getByRole("option", { name: "Deutsch" }));
    expect(onValueChange).not.toHaveBeenCalled();
    expect(screen.getByRole("listbox", { name: "Languages" })).toBeInTheDocument();
  });
});
