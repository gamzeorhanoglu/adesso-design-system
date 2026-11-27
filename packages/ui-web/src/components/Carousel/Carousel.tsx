import type { HTMLAttributes } from "react";
import carouselImage from "../../assets/carousel-image-1.jpeg";
import { Button } from "../Button/Button";
import { CarouselControl } from "../CarouselControl/CarouselControl";

export type CarouselDevice = "desktop" | "mobile";

export interface CarouselProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  buttonLabel?: string;
  count?: number;
  defaultSelectedIndex?: number;
  device?: CarouselDevice;
  getItemLabel?: (index: number) => string;
  imageAlt?: string;
  imageSrc?: string;
  onButtonClick?: () => void;
  onSelectedIndexChange?: (index: number) => void;
  selectedIndex?: number;
  showButton?: boolean;
  subtitle?: string;
  title?: string;
}

export function Carousel({
  buttonLabel = "Lorem Ipsum",
  className,
  count = 4,
  defaultSelectedIndex = 0,
  device = "desktop",
  getItemLabel,
  imageAlt = "",
  imageSrc = carouselImage,
  onButtonClick,
  onSelectedIndexChange,
  selectedIndex,
  showButton = true,
  subtitle = "Lorem ipsum dolor sit amet",
  title = "Lorem ipsum dolor sit amet",
  ...props
}: CarouselProps) {
  const isMobile = device === "mobile";
  const classNames = ["ads-carousel", `device-${device}`, className].filter(Boolean).join(" ");

  return (
    <div
      {...props}
      aria-label={props["aria-label"] ?? title}
      aria-roledescription="carousel"
      className={classNames}
      data-device={device}
      role="region"
    >
      <div aria-hidden="true" className="ads-carousel-backdrop">
        {imageSrc ? <img alt={imageAlt} src={imageSrc} /> : null}
        <div className="ads-carousel-overlay" />
      </div>
      <div className="ads-carousel-content">
        <h2 className="ads-carousel-title">{title}</h2>
        <p className="ads-carousel-subtitle">{subtitle}</p>
        {showButton ? (
          <Button onClick={onButtonClick} size={isMobile ? "small" : "medium"} variant="secondary">
            {buttonLabel}
          </Button>
        ) : null}
      </div>
      <CarouselControl
        count={count}
        defaultSelectedIndex={defaultSelectedIndex}
        getItemLabel={getItemLabel}
        onSelectedIndexChange={onSelectedIndexChange}
        selectedIndex={selectedIndex}
      />
    </div>
  );
}
