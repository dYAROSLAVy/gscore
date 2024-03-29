import classNames from "classnames/bind";
import classes from "./input-secondary.module.scss";
import { BaseInputProps } from "../../base/input-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: BaseInputProps) => {
  const cnRoot = cn(`secondary`, className);

  return {
    cnRoot,
  };
};
