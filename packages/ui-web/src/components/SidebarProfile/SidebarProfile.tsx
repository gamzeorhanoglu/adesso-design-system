import type { HTMLAttributes } from "react";
import { Avatar } from "../Avatar/Avatar";
import type { SidebarTheme } from "../SidebarItem/SidebarItem";

export interface SidebarProfileProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  initials?: string;
  name?: string;
  role?: string;
  showIdentity?: boolean;
  theme?: SidebarTheme;
}

export function SidebarProfile({
  className,
  initials = "AB",
  name = "John Doe",
  role = "Product Designer",
  showIdentity = true,
  theme = "light",
  ...props
}: SidebarProfileProps) {
  const classes = ["ads-sidebar-profile", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes} data-theme={theme}>
      <Avatar type="initial" initials={initials} aria-label={`${name} profile`} />
      {showIdentity ? (
        <span className="ads-sidebar-profile-identity">
          <span className="ads-sidebar-profile-name">{name}</span>
          <span className="ads-sidebar-profile-role">{role}</span>
        </span>
      ) : null}
    </div>
  );
}
