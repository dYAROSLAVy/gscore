import classNames from "classnames/bind";
import classes from "./promo-card.module.scss";
import { PromoCardProps } from "../promo-card";

const cn = classNames.bind(classes);

export const useClasses = ( tomato : PromoCardProps["tomato"]) => {
const cnRoot = cn(`promo-card`, { "promo-card--primary": tomato });
  const cnTopWrap = cn(`promo-card__top-wrapper`);
  const cnPrice = cn(`promo-card__price`);
  const cnTitle = cn(`promo-card__title`);
  const cnSlogan = cn(`promo-card__slogan`);
  const cnBottomWrap = cn(`promo-card__bottom-wrapper`);
  const cnList = cn(`promo-card__list`);
  const cnListDecor = cn(`promo-card__list-decor`);
  return {
    cnRoot,
    cnTopWrap,
    cnPrice,
    cnTitle,
    cnSlogan,
    cnBottomWrap,
    cnList,
    cnListDecor,
  };
};
