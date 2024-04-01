import classNames from "classnames/bind";
import classes from "./user-menu.module.scss";
import { UserMenuProps } from "../user-menu";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: UserMenuProps) => {
  const cnRoot = cn(`user-menu`, className);
  const cnButton = cn(`user-menu__button`);
  return {
    cnRoot,
    cnButton
  };
};
