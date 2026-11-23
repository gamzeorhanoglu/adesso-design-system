import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials with an accessible name", () => {
    const { container } = render(
      <Avatar type="initial" initials="GO" aria-label="Gamze Orhanoğlu" />
    );

    expect(screen.getByRole("img", { name: "Gamze Orhanoğlu" })).toBeInTheDocument();
    expect(container.querySelector(".ads-avatar-initials")).toHaveTextContent("GO");
  });

  it("renders image, size, shape, and badge variants", () => {
    const { container } = render(
      <Avatar
        type="image"
        src="/avatar.png"
        aria-label="Profile photo"
        size="large"
        shape="square"
        showBadge
      />
    );

    expect(container.querySelector(".ads-avatar")).toHaveClass("size-large", "shape-square");
    expect(container.querySelector(".ads-avatar-image")).toHaveAttribute("src", "/avatar.png");
    expect(container.querySelector(".ads-avatar-badge")).toBeInTheDocument();
  });
});
