import classNames from "classnames/bind";
import classes from "./checkbox.module.scss";
import { BaseInputProps } from "../../inputs/base/input-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: BaseInputProps) => {
  const cnRoot = cn(`checkbox`, className);
  const cnDecor = cn(`checkbox__decor`, className);
  return {
    cnRoot,
    cnDecor
  };
};
