import {
  CompassIcon,
  MenuIcon,
  SearchIcon,
  UsersIcon
} from "@ads/icons";
import {
  forwardRef,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode
} from "react";
import desktopShape from "../../assets/navigation/top-navigation-desktop.svg";
import mobileShape from "../../assets/navigation/top-navigation-mobile.svg";
import { Language } from "../Language/Language";
import { Logo } from "../Logo/Logo";
import { NavigationItem } from "../NavigationItem/NavigationItem";

export type TopNavigationDevice = "desktop" | "mobile";

export interface TopNavigationProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  children?: ReactNode;
  device: TopNavigationDevice;
  languageSelector?: ReactNode;
  logoHref?: string;
  logoLabel?: string;
  menuControls?: string;
  menuExpanded?: boolean;
  menuLabel?: string;
  onMenuClick?: MouseEventHandler<HTMLButtonElement>;
}

const defaultDesktopItems = (
  <>
    <NavigationItem
      href="#discover"
      icon={<CompassIcon size="lg" />}
      data-preview-state="hover"
    >
      adesso’yu keşfedin
    </NavigationItem>
    <NavigationItem href="#career" icon={<UsersIcon size="lg" />}>
      Kariyer
    </NavigationItem>
    <NavigationItem href="#search" icon={<SearchIcon size="lg" />}>
      Ara
    </NavigationItem>
  </>
);

const defaultLanguageSelector = (
  <Language
    aria-label="Language"
    options={[{ country: "turkey", label: "Türkçe", value: "tr" }]}
  />
);

export const TopNavigation = forwardRef<HTMLElement, TopNavigationProps>(
  function TopNavigation(
    {
      children,
      className,
      device,
      languageSelector = defaultLanguageSelector,
      logoHref = "/",
      logoLabel = "Adesso home",
      menuControls,
      menuExpanded = false,
      menuLabel = "Open navigation",
      onMenuClick,
      ...props
    },
    ref
  ) {
    const classes = ["ads-top-navigation", className].filter(Boolean).join(" ");
    const shape = device === "desktop" ? desktopShape : mobileShape;

    return (
      <header {...props} ref={ref} className={classes} data-device={device}>
        <img className="ads-top-navigation-shape" src={shape} alt="" aria-hidden="true" />
        <a className="ads-top-navigation-logo" href={logoHref} aria-label={logoLabel}>
          <Logo label="" />
        </a>

        {device === "desktop" ? (
          <div className="ads-top-navigation-items">
            <nav className="ads-top-navigation-tabs" aria-label="Primary navigation">
              {children ?? defaultDesktopItems}
            </nav>
            <div className="ads-top-navigation-language">{languageSelector}</div>
          </div>
        ) : (
          <button
            type="button"
            className="ads-top-navigation-menu"
            aria-label={menuLabel}
            aria-expanded={menuExpanded}
            aria-controls={menuControls}
            onClick={onMenuClick}
          >
            <MenuIcon size="lg" />
          </button>
        )}
      </header>
    );
  }
);
