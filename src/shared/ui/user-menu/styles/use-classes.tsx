import classNames from "classnames/bind";
import classes from "./user-menu.module.scss";
import { UserMenuProps } from "../user-menu";

const cn = classNames.bind(classes);

export const useClasses = ({ className, isSubscriptions }: UserMenuProps) => {
  const cnRoot = cn(`user-menu`, className);
  const cnMainLink = cn(`user-menu__main-link`, {
    "user-menu__main-link--primary": isSubscriptions,
  });
  const cnButton = cn(`user-menu__button`);
  const cnButtonMob = cn(`user-menu__button-mobile`);
  const cnTopInner = cn(`user-menu__top-inner`);
  const cnBottomInner = cn(`user-menu__bottom-inner`);
  const cnBottomInnerMob = cn(`user-menu__bottom-inner-mobile`);
  const cnLink = cn(`user-menu__link`);
  const cnToggle = cn(`user-menu__toggle`);
  const cnToggleDec = cn(`user-menu__toggle-decor`);
  const cnMobileMenu = cn(`user-menu__mobile`);
  const cnMenuOverlay = cn(`user-menu__overlay`);
  const cnLogoLink = cn(`user-menu__logo-link`);
  const cnMobileTopWrap = cn(`user-menu__mobile-top-wrapper`);
  const cnMobileInner = cn(`user-menu__mobile-inner`);
  return {
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
  };
};
