import { ButtonHTMLAttributes, FC, useState } from "react";
import { useClasses } from "./styles/use-classes";
import { ArrowDownIcon } from "@/shared/icons/arrow-down";
import { ArrowTopIcon } from "@/shared/icons/arrow-top";
import { SettingsIcon } from "@/shared/icons/settings";
import { LogoutIcon } from "@/shared/icons/logout";

export type UserMenuProps = {
  userName?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UserMenu: FC<UserMenuProps> = ({ className, userName }) => {
  const { cnRoot, cnButton, cnTopInner, cnBottomInner, cnLink } = useClasses({
    className,
  });
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const CloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className={cnRoot}>
      <div className={cnTopInner}>
        <a href="/">My subscriptions</a>
        {!showMenu && (
          <button onClick={openMenu} className={cnButton}>
            <span>{userName}</span>
            <ArrowDownIcon></ArrowDownIcon>
          </button>
        )}
        {showMenu && (
          <button onClick={CloseMenu} className={cnButton}>
            <span>{userName}</span>
            <ArrowTopIcon></ArrowTopIcon>
          </button>
        )}
      </div>

      {showMenu && (
        <div className={cnBottomInner}>
          <a className={cnLink} href="/settings">
            <SettingsIcon />
            <span>Settings</span>
          </a>
          <a className={cnLink} href="/">
            <LogoutIcon />
            <span>Logout</span>
          </a>
        </div>
      )}
    </div>
  );
};
