import classNames from "classnames/bind";
import classes from "../button-base.module.scss";
import { BaseButtonProps } from "../button-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className, isLoading }: BaseButtonProps) => {
  const cnRoot = cn(`button`, { loading: isLoading }, className);

  return {
    cnRoot,
  };
};
