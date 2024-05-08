import { ButtonHTMLAttributes, FC, useEffect, useRef, useState } from "react";
import { useClasses } from "./styles/use-classes";
import { ArrowDownIcon } from "@/shared/icons/arrow-down";
import { ArrowTopIcon } from "@/shared/icons/arrow-top";
import { SettingsIcon } from "@/shared/icons/settings";
import { LogoutIcon } from "@/shared/icons/logout";
import Link from "next/link";
import { LogoMain } from "@/shared/icons/logo";
import { CloseIcon } from "@/shared/icons/close";

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
  const {
    cnRoot,
    cnButton,
    cnTopInner,
    cnBottomInner,
    cnLink,
    cnMainLink,
    cnToggle,
    cnToggleDec,
    cnMobileMenu,
    cnMenuOverlay,
    cnLogoLink,
    cnMobileTopWrap,
    cnButtonMob,
    cnBottomInnerMob,
    cnMobileInner,
  } = useClasses({
    className,
    isSubscriptions,
  });
  const [showMenu, setShowMenu] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflowY = "hidden";
    }
  }, [showMobileMenu]);

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMobileMenu) {
      document.body.style.overflowY = "";
    }
  }, [closeMobileMenu]);

  const logOut = () => {
    window.localStorage.removeItem("user-token");
    document.cookie = "user-token=; Max-Age=-1;";
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMobileMenu();
        }
      });
    };
  }, [closeMobileMenu]);

  return (
    <div className={cnRoot}>
      <div className={cnTopInner}>
        <Link className={cnMainLink} href="/subscriptions">
          My subscriptions
        </Link>
        <button onClick={showMenu ? closeMenu : openMenu} className={cnButton}>
          <span>{userName}</span>
          {showMenu ? <ArrowTopIcon /> : <ArrowDownIcon />}
        </button>
      </div>
      <button
        onClick={!showMobileMenu ? openMobileMenu : closeMobileMenu}
        className={cnToggle}
      >
        <span className={cnToggleDec}></span>
        <span className={cnToggleDec}></span>
        <span className={cnToggleDec}></span>
      </button>
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
      {showMobileMenu && (
        <div
          className={cnMenuOverlay}
          onClick={(e) => e.currentTarget === e.target && closeMobileMenu()}
        >
          <div className={cnMobileMenu}>
            <div className={cnMobileTopWrap}>
              <button className={cnToggle} onClick={closeMobileMenu}>
                <CloseIcon />
              </button>
              <Link href="/" className={cnLogoLink}>
                <LogoMain />
              </Link>
            </div>
            <Link className={cnMainLink} href="/subscriptions">
              My subscriptions
            </Link>
            <div className={cnMobileInner}>
              <button
                onClick={showMenu ? closeMenu : openMenu}
                className={cnButtonMob}
              >
                <span>{userName}</span>
                {showMenu ? <ArrowTopIcon /> : <ArrowDownIcon />}
              </button>
              {showMenu && (
                <div className={cnBottomInnerMob}>
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
          </div>
        </div>
      )}
    </div>
  );
};
