import classNames from "classnames/bind";
import classes from "./input-base.module.scss";
import { BaseInputProps } from "../input-base";

const cn = classNames.bind(classes);

export const useClasses = ({ className, error }: BaseInputProps) => {
  const cnRoot = cn(`input`, className);
  const cnField = cn(`input__field`, {
    "input__field--error": error,
  });

  const cnError = cn(`input__error`);

  return {
    cnRoot,
    cnField,
    cnError,
  };
};
