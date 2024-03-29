import classNames from "classnames/bind";
import classes from "./input-copy.module.scss";
import { BaseInputProps } from "../../base/input-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: BaseInputProps) => {
  const cnRoot = cn(`copy`, className);
  const cnBtn = cn(`copy__button`, className);

  return {
    cnRoot,
    cnBtn,
  };
};
