import classNames from "classnames/bind";
import classes from "./subscriptions.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`subscriptions`);
  const cnMainTitleWrap = cn(`subscriptions__main-title-wrapper`);
  const cnMainTitle = cn(`subscriptions__main-title`);
  const cnSliderCont = cn(`subscriptions__slider-container`);
  const cnSlider = cn(`subscriptions__slider`);
  const cnCodesList = cn(`subscriptions__codes-list`);
  const cnConfirmWrap = cn(`subscriptions__confirm-wrapper`);
  const cnConfirmText = cn(`subscriptions__confirm-text`);
  const cnConfirmTextMob = cn(`subscriptions__confirm-text-mobile`);

  return {
    cnRoot,
    cnMainTitleWrap,
    cnMainTitle,
    cnSlider,
    cnCodesList,
    cnSliderCont,
    cnConfirmWrap,
    cnConfirmText,
    cnConfirmTextMob,
  };
};
