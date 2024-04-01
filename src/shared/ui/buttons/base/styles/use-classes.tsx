import classNames from "classnames/bind";
import classes from "./button-base.module.scss";
import { ButtonBaseProps } from "../button-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className, isLoading }: ButtonBaseProps) => {
  const cnRoot = cn(className, `button`, { loading: isLoading });

  return {
    cnRoot,
  };
};
