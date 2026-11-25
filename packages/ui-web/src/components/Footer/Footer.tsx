import type { HTMLAttributes } from "react";
import {
  ChevronUpIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@ads/icons";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

export type FooterDevice = "desktop" | "mobile";
export type FooterSocialChannel =
  | "linkedin"
  | "instagram"
  | "twitter"
  | "facebook"
  | "youtube";

export interface FooterSocialLink {
  channel: FooterSocialChannel;
  href?: string;
  label?: string;
}

export interface FooterLegalLink {
  label: string;
  href?: string;
}

export interface FooterProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  device?: FooterDevice;
  logoHref?: string;
  logoLabel?: string;
  addressLines?: readonly string[];
  phone?: string;
  fax?: string;
  email?: string;
  socialLinks?: readonly FooterSocialLink[];
  legalLinks?: readonly FooterLegalLink[];
  backToTopLabel?: string;
  onBackToTop?: () => void;
}

const defaultAddress = [
  "adesso Turkey (HQ)",
  "Maslak Mah. Ahi Evran Cad.",
  "Olive Plaza No: 11 İç Kapı No: 12",
  "34398 Sarıyer İstanbul",
] as const;

const defaultSocialLinks: readonly FooterSocialLink[] = [
  { channel: "linkedin", label: "LinkedIn" },
  { channel: "instagram", label: "Instagram" },
  { channel: "twitter", label: "Twitter" },
  { channel: "facebook", label: "Facebook" },
  { channel: "youtube", label: "YouTube" },
];

const defaultLegalLinks: readonly FooterLegalLink[] = [
  { label: "İletişim" },
  { label: "Gizlilik Politikası" },
  { label: "Diğer Politikalar" },
  { label: "Bilgi Toplumu Hizmetleri" },
];

function renderSocialIcon(channel: FooterSocialChannel, device: FooterDevice) {
  const size = device === "mobile" ? "lg" : "md";

  switch (channel) {
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "instagram":
      return <InstagramIcon size={size} />;
    case "twitter":
      return <TwitterIcon size={size} />;
    case "facebook":
      return <FacebookIcon size={size} />;
    case "youtube":
      return <YoutubeIcon size={size} />;
  }
}

function renderFooterLink(link: FooterLegalLink) {
  return link.href ? <a href={link.href}>{link.label}</a> : <span>{link.label}</span>;
}

export function Footer({
  device = "desktop",
  logoHref = "/",
  logoLabel = "Adesso home",
  addressLines = defaultAddress,
  phone = "+90 212 346 20 02",
  fax = "+90 212 346 20 03",
  email = "info@adesso.com.tr",
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  backToTopLabel = "Back to top",
  onBackToTop,
  className,
  ...props
}: FooterProps) {
  const classes = ["ads-footer", className].filter(Boolean).join(" ");

  return (
    <footer {...props} className={classes} data-device={device}>
      <div className="ads-footer-brand-row">
        <a className="ads-footer-logo" href={logoHref} aria-label={logoLabel}>
          <Logo variant="white" label="" />
        </a>
        <nav className="ads-footer-social" aria-label="Social media">
          {socialLinks.map((link) => {
            const icon = renderSocialIcon(link.channel, device);
            const label = link.label ?? link.channel;
            return link.href ? (
              <a key={link.channel} href={link.href} aria-label={label}>
                {icon}
              </a>
            ) : (
              <span key={link.channel} aria-hidden="true">
                {icon}
              </span>
            );
          })}
        </nav>
      </div>

      <div className="ads-footer-content-row">
        <div className="ads-footer-contact">
          <address className="ads-footer-address">
            {addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <address className="ads-footer-contact-details">
            <span>
              T&nbsp;<a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            </span>
            <span>F&nbsp;{fax}</span>
            <span>
              E&nbsp;<a href={`mailto:${email}`}>{email}</a>
            </span>
          </address>
        </div>

        <div className="ads-footer-menu-and-up">
          <nav className="ads-footer-menu" aria-label="Footer">
            {legalLinks.map((link, index) => (
              <span className="ads-footer-menu-item" key={link.label}>
                {index > 0 ? <span className="ads-footer-divider" aria-hidden="true" /> : null}
                {renderFooterLink(link)}
              </span>
            ))}
          </nav>
          <Button
            variant="icon-only"
            size="medium"
            aria-label={backToTopLabel}
            onClick={onBackToTop}
          >
            <ChevronUpIcon size="lg" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
