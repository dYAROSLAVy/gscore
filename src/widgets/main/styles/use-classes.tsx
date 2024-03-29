import classNames from "classnames/bind";
import classes from "./main.module.scss";
import { MainProps } from "../main";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: MainProps) => {
  const cnRoot = cn(`main`, className);

  return {
    cnRoot,
  };
};
