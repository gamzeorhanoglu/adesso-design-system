import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectionItem } from "../SelectionItem/SelectionItem";
import { SelectionGroup } from "./SelectionGroup";

describe("SelectionGroup", () => {
  it("groups ADS selection items without recreating their controls", () => {
    render(
      <SelectionGroup aria-label="Choose a plan">
        <SelectionItem type="radio" label="Starter" name="plan" />
        <SelectionItem type="radio" label="Growth" name="plan" />
      </SelectionGroup>
    );
    const group = screen.getByRole("group", { name: "Choose a plan" });

    expect(within(group).getAllByRole("radio")).toHaveLength(2);
  });
});
