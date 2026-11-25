import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StepperConnector } from "./StepperConnector";

describe("StepperConnector", () => {
  it.each(["default", "completed", "disabled"] as const)(
    "renders the %s Figma state",
    (state) => {
      const { container } = render(<StepperConnector state={state} />);
      expect(container.querySelector(".ads-stepper-connector")).toHaveAttribute(
        "data-state",
        state,
      );
    },
  );
});
