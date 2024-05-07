import classNames from "classnames/bind";
import classes from "./account-tabs.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnTextWrap = cn(`tab__text-wrapper`);
  const cnTitle = cn(`tab__title`);
  const cnForm = cn(`tab__form`);
  const cnButton = cn(`tab__button`);
  const cnText = cn(`tab__text`);
  const cnLinkWrap = cn(`tab__link-wrapper`);
  const cnTotalWrap = cn(`tab__total-wrapper`);
  const cnCard = cn(`tab__checkout-card`);
  const cnButtonPrimary = cn(`tab__button--primary`);

  return {
    cnTitle,
    cnForm,
    cnTextWrap,
    cnButton,
    cnText,
    cnLinkWrap,
    cnTotalWrap,
    cnCard,
    cnButtonPrimary,
  };
};
