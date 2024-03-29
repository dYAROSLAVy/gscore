import classNames from "classnames/bind";
import classes from "../copyright.module.scss";
import { CopyrightProps } from "../copyright";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: CopyrightProps) => {
  const cnRoot = cn(`copyright`, className);
  return {
    cnRoot,
  };
};
