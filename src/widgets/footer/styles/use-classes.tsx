import classNames from "classnames/bind";
import classes from "./footer.module.scss";
import { FooterProps } from "../footer";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: FooterProps) => {
  const cnRoot = cn(`footer`, className);
  const cnTopInner = cn(`footer__top-inner`, className);
  const cnBottomInner = cn(`footer__bottom-inner`, className);

  return {
    cnRoot,
    cnTopInner,
    cnBottomInner,
  };
};
