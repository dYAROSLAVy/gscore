import { ButtonHTMLAttributes, FC, useState } from "react";
import { useClasses } from "./styles/use-classes";
import { ArrowDownIcon } from "@/shared/icons/arrow-down";
import { ArrowTopIcon } from "@/shared/icons/arrow-top";
import { SettingsIcon } from "@/shared/icons/settings";
import { LogoutIcon } from "@/shared/icons/logout";
import Link from "next/link";

export type UserMenuProps = {
  userName?: string;
  className?: string;
  isSubscriptions?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UserMenu: FC<UserMenuProps> = ({
  className,
  userName,
  isSubscriptions,
}) => {
  const { cnRoot, cnButton, cnTopInner, cnBottomInner, cnLink, cnMainLink } =
    useClasses({
      className,
      isSubscriptions,
    });
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const logOut = () => {
    window.localStorage.removeItem("user-token");
  };

  return (
    <div className={cnRoot}>
      <div className={cnTopInner}>
        <Link className={cnMainLink} href="/subscriptions">
          My subscriptions
        </Link>
        {!showMenu && (
          <button onClick={openMenu} className={cnButton}>
            <span>{userName}</span>
            <ArrowDownIcon />
          </button>
        )}
        {showMenu && (
          <button onClick={closeMenu} className={cnButton}>
            <span>{userName}</span>
            <ArrowTopIcon />
          </button>
        )}
      </div>
      {showMenu && (
        <div className={cnBottomInner}>
          <Link className={cnLink} href="/settings">
            <SettingsIcon />
            <span>Settings</span>
          </Link>
          <a className={cnLink} href="/" onClick={logOut}>
            <LogoutIcon />
            <span>Logout</span>
          </a>
        </div>
      )}
    </div>
  );
};
