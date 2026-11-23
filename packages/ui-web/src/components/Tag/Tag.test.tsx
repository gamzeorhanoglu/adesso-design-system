import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { StarIcon } from "@ads/icons";
import { describe, expect, it } from "vitest";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders the complete soft variant contract", () => {
    const { container } = render(
      <Tag variant="soft" color="green" size="large" icon={<StarIcon size="md" />}>
        Approved
      </Tag>
    );

    expect(screen.getByText("Approved")).toBeInTheDocument();
    expect(container.querySelector(".ads-tag")).toHaveClass(
      "variant-soft",
      "color-green",
      "size-large"
    );
    expect(container.querySelector('[data-icon="StarIcon"]')).toBeInTheDocument();
  });

  it("renders the complete solid variant contract", () => {
    const { container } = render(
      <Tag variant="solid" color="red" size="small">Error</Tag>
    );
    expect(container.querySelector(".ads-tag")).toHaveClass(
      "variant-solid",
      "color-red",
      "size-small"
    );
  });

  it("requires an accessible name for icon-only usage", () => {
    render(
      <Tag aria-label="Favorite" icon={<StarIcon size="sm" />} />
    );
    expect(screen.getByLabelText("Favorite")).toBeInTheDocument();
  });
});
