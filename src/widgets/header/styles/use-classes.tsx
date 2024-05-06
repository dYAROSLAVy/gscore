import classNames from "classnames/bind";
import classes from "./header.module.scss";
import { HeaderProps } from "../header";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: HeaderProps) => {
  const cnRoot = cn(`header`, className);
  const cnContainer = cn(`header__container`);
  const cnLogo = cn(`header__logo`);

  return {
    cnRoot,
    cnContainer,
    cnLogo,
  };
};
