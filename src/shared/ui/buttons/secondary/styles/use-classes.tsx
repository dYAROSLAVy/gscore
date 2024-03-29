import classNames from "classnames/bind";
import classes from "./button-secondary.module.scss";
import { ButtonBaseProps } from "../../base/button-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: ButtonBaseProps) => {
  const cnRoot = cn(`secondary`, className);

  return {
    cnRoot,
  };
};
