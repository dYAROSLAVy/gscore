import classNames from "classnames/bind";
import classes from "./copyright.module.scss";
import { CopyrightProps } from "../copyright";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: CopyrightProps) => {
  const cnRoot = cn(`copyright`, className);
  const cnText = cn(`copyright__text`);
  const cnLink = cn(`copyright__link`);
  return {
    cnRoot,
    cnText,
    cnLink,
  };
};
