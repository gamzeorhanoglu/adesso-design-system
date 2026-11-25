import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SidebarProfile } from "./SidebarProfile";

describe("SidebarProfile", () => {
  it("renders the published light identity contract", () => {
    const { container } = render(<SidebarProfile />);
    expect(screen.getByRole("img", { name: "John Doe profile" })).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Product Designer")).toBeInTheDocument();
    expect(container.querySelector(".ads-sidebar-profile")).toHaveAttribute(
      "data-theme",
      "light",
    );
  });

  it("supports the dark and identity-hidden variants", () => {
    const { container } = render(
      <SidebarProfile theme="dark" showIdentity={false} initials="GO" name="Gamze" />,
    );
    expect(screen.getByRole("img", { name: "Gamze profile" })).toBeInTheDocument();
    expect(screen.queryByText("Gamze")).not.toBeInTheDocument();
    expect(container.querySelector(".ads-sidebar-profile")).toHaveAttribute(
      "data-theme",
      "dark",
    );
  });
});
