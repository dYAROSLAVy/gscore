import classNames from "classnames/bind";
import classes from "./license-card.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`license-card`);
  const cnTopInner = cn(`license-card__top-inner`);
  const cnStatus = cn(`license-card__status`);
  const cnInfoWrap = cn(`license-card__info-wrapper`);
  const cnInfoInner = cn(`license-card__info-inner`);
  const cnBottomInner = cn(`license-card__bottom-inner`);
  const cnLicenseDate = cn(`license-card__license-date`);
  const cnButton = cn(`license-card__button`);
  return {
    cnRoot,
    cnTopInner,
    cnInfoWrap,
    cnBottomInner,
    cnInfoInner,
    cnLicenseDate,
    cnStatus,
    cnButton,
  };
};
