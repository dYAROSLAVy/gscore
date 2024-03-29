import classNames from "classnames/bind";
import classes from "../wrapper.module.scss";
import { WrapperProps } from "../wrapper";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: WrapperProps) => {
  const cnRoot = cn(`wrapper`, className);
  return {
    cnRoot,
  };
};
