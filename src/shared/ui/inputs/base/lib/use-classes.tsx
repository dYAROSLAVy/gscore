import classNames from "classnames/bind";
import classes from "../input-base.module.scss";
import { BaseInputProps } from "../input-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: BaseInputProps) => {
  const cnRoot = cn(`input`, className);

  const cnField = cn(`input__field`);

  return {
    cnRoot,
    cnField,
  };
};
