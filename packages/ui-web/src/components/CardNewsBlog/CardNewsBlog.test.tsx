import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardNewsBlog } from "./CardNewsBlog";

describe("CardNewsBlog", () => {
  it("renders the blog type with category, date, and title", () => {
    render(<CardNewsBlog date="01/01/2027" title="Headline" />);

    expect(screen.getByRole("article")).toHaveClass("ads-card-news-blog", "type-blog", "state-default");
    expect(screen.getByText("BLOG")).toBeInTheDocument();
    expect(screen.getByText("01/01/2027")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Headline" })).toBeInTheDocument();
  });

  it("supports the news type, hover state, and hiding the category", () => {
    const { rerender } = render(<CardNewsBlog state="hover" type="news" />);

    expect(screen.getByRole("article")).toHaveClass("type-news", "state-hover");
    expect(screen.getByText("NEWS")).toBeInTheDocument();

    rerender(<CardNewsBlog showText={false} type="news" />);
    expect(screen.queryByText("NEWS")).not.toBeInTheDocument();
    expect(screen.getByText("09/09/2026")).toBeInTheDocument();
  });
});
