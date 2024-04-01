import classNames from "classnames/bind";
import classes from "./promo.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`promo`);
  const cnTitle = cn(`promo__title`);
  const cnList = cn(`promo__list`);
  const cnContactWrap = cn(`promo__contact-wrapper`);
  const cnLinkTitle = cn(`promo__link-title`);
  const cnLink = cn(`promo__link`);

  return {
    cnRoot,
    cnTitle,
    cnList,
    cnContactWrap,
    cnLinkTitle,
    cnLink,
  };
};
