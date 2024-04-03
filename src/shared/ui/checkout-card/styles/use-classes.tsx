import classNames from "classnames/bind";
import classes from "./checkout-card.module.scss";
import { CheckoutCardProps } from "../checkout-card";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: CheckoutCardProps) => {
  const cnRoot = cn(`card`, className);
  const cnCardTopInner = cn(`card__top-inner`);
  const cnCardBottomInner = cn(`card__bottom-inner`);
  const cnPrice = cn(`card__price`);

  return {
    cnRoot,
    cnCardTopInner,
    cnCardBottomInner,
    cnPrice
  };
};
