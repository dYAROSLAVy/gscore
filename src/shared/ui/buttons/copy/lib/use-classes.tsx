import classNames from "classnames/bind";
import classes from "../button-copy.module.scss";
import { BaseButtonProps } from "../../base/button-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: BaseButtonProps) => {
  const cnRoot = cn(`button-copy`, className);

  return {
    cnRoot,
  };
};
