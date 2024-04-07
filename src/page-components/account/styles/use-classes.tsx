import classNames from "classnames/bind";
import classes from "./account.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`account`);
  const cnInner = cn(`account__inner`);
  const cnTabsList = cn(`account__tabs-list`);
  const cnTabsTitle = cn(`account__tabs-title`);
  const cnTextWrap = cn(`account__text-wrapper`);
  const cnTitle = cn(`account__title`);
  const cnText = cn(`account__text`);
  const cnForm = cn(`account__form`);
  const cnLinkWrap = cn(`account__link-wrapper`);
  const cnTotalWrap = cn(`account__total-wrapper`);
  const cnCard = cn(`account__checkout-card`);
  const cnButton = cn(`account__button`);
  const cnButtonPrimary = cn(`account__button--primary`);

  return {
    cnRoot,
    cnInner,
    cnTabsList,
    cnTabsTitle,
    cnTitle,
    cnText,
    cnForm,
    cnLinkWrap,
    cnTextWrap,
    cnTotalWrap,
    cnCard,
    cnButton,
    cnButtonPrimary,
  };
};
