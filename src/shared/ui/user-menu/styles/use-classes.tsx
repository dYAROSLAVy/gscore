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
  const cnTopInner = cn(`user-menu__top-inner`);
  const cnBottomInner = cn(`user-menu__bottom-inner`);
  const cnLink = cn(`user-menu__link`);
  return {
    cnRoot,
    cnButton,
    cnTopInner,
    cnBottomInner,
    cnLink,
    cnMainLink,
  };
};
