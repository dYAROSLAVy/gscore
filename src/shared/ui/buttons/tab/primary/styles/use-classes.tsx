import classNames from "classnames/bind";
import classes from "./button-tab-primary.module.scss";
import { ButtonBaseProps } from "../../../base/button-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className, isActive }: ButtonBaseProps) => {
  const cnRoot = cn(
    `button-tab`,
    { "button-tab--active": isActive },
    className
  );

  return {
    cnRoot,
  };
};
