import classNames from "classnames/bind";
import classes from "./container.module.scss";
import { ContainerProps } from "../container";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: ContainerProps) => {
  const cnRoot = cn(`container`, className);

  return {
    cnRoot,
  };
};
