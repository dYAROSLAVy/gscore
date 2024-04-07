import classNames from "classnames/bind";
import classes from "./subscriptions.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`subscriptions`);
  const cnMainTitleWrap = cn(`subscriptions__main-title-wrapper`);
  const cnMainTitle = cn(`subscriptions__main-title`);

  const cnError = cn(`subscriptions__error`);
  const cnTitle = cn(`subscriptions__title`);
  const cnText = cn(`subscriptions__text`);
  const cnCloseDecor = cn(`subscriptions__close-decor`);
  const cnButton = cn(`subscriptions__button`);
  const cnSlider = cn(`subscriptions__slider`);
  const cnCodesList = cn(`subscriptions__codes-list`);

  return {
    cnRoot,
    cnMainTitleWrap,
    cnMainTitle,
    cnError,
    cnTitle,
    cnText,
    cnCloseDecor,
    cnButton,
    cnSlider,
    cnCodesList
  };
};
