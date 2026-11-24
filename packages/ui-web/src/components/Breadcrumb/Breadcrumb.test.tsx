import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Breadcrumb } from "./Breadcrumb";
import { BreadcrumbItem } from "../BreadcrumbItem/BreadcrumbItem";

describe("Breadcrumb", () => {
  it("renders the published four-item composition with three ADS separators", () => {
    const { container } = render(
      <Breadcrumb aria-label="Page hierarchy">
        <BreadcrumbItem href="/one">Lorem Ipsum</BreadcrumbItem>
        <BreadcrumbItem href="/two">Lorem Ipsum</BreadcrumbItem>
        <BreadcrumbItem href="/three">Lorem Ipsum</BreadcrumbItem>
        <BreadcrumbItem current>Lorem Ipsum</BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByRole("navigation", { name: "Page hierarchy" })).toHaveClass(
      "ads-breadcrumb"
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(container.querySelectorAll(".ads-breadcrumb-separator .ads-icon")).toHaveLength(3);
    expect(container.querySelectorAll('[data-icon="ChevronRightIcon"]')).toHaveLength(3);
  });

  it("keeps the active current page as a final non-navigating item", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/parent">Parent</BreadcrumbItem>
        <BreadcrumbItem current>Current</BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByRole("link", { name: "Parent" })).toHaveAttribute("href", "/parent");
    const current = screen.getByText("Current");
    expect(current).toHaveAttribute("data-state", "active");
    expect(current).toHaveAttribute("aria-current", "page");
    expect(current).not.toHaveAttribute("href");
  });

  it("maps disabled state to a non-focusable, non-navigating item", () => {
    const onClick = vi.fn();
    render(
      <BreadcrumbItem href="/disabled" disabled onClick={onClick}>
        Disabled
      </BreadcrumbItem>
    );

    const item = screen.getByText("Disabled");
    expect(item).toHaveAttribute("data-state", "disabled");
    expect(item).toHaveAttribute("aria-disabled", "true");
    expect(item).toHaveAttribute("tabindex", "-1");
    expect(item).not.toHaveAttribute("href");
    fireEvent.click(item);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("forwards default item clicks", () => {
    const onClick = vi.fn((event) => event.preventDefault());
    render(
      <BreadcrumbItem href="/page" onClick={onClick}>
        Page
      </BreadcrumbItem>
    );

    fireEvent.click(screen.getByRole("link", { name: "Page" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
