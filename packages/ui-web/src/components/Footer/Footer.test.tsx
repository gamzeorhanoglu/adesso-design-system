import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the exact desktop ADS composition", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("ads-footer");
    expect(footer).toHaveAttribute("data-device", "desktop");
    expect(within(footer).getByRole("link", { name: "Adesso home" })).toContainElement(
      footer.querySelector(".ads-logo.variant-white"),
    );
    expect(within(footer).getByText("adesso Turkey (HQ)")).toBeVisible();
    expect(within(footer).getByRole("link", { name: "+90 212 346 20 02" })).toHaveAttribute(
      "href",
      "tel:+902123462002",
    );
    expect(within(footer).getByRole("link", { name: "info@adesso.com.tr" })).toHaveAttribute(
      "href",
      "mailto:info@adesso.com.tr",
    );
  });

  it("renders the published mobile ADS composition", () => {
    render(<Footer device="mobile" />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveAttribute("data-device", "mobile");
    expect(footer.querySelectorAll('.ads-footer-social .ads-icon[data-size="lg"]')).toHaveLength(5);
    expect(within(footer).getAllByText(/Politikası|Politikalar|İletişim|Bilgi Toplumu/)).toHaveLength(4);
    expect(within(footer).getByRole("button", { name: "Back to top" })).toBeVisible();
  });

  it("exposes supplied social and legal destinations", () => {
    render(
      <Footer
        socialLinks={[{ channel: "linkedin", href: "#linkedin", label: "LinkedIn" }]}
        legalLinks={[{ label: "İletişim", href: "#contact" }]}
      />,
    );

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "#linkedin");
    expect(screen.getByRole("link", { name: "İletişim" })).toHaveAttribute("href", "#contact");
  });

  it("forwards the back-to-top action without owning page behavior", () => {
    const onBackToTop = vi.fn();
    render(<Footer onBackToTop={onBackToTop} />);

    fireEvent.click(screen.getByRole("button", { name: "Back to top" }));
    expect(onBackToTop).toHaveBeenCalledOnce();
  });
});
