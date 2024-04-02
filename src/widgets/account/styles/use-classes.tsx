import classNames from "classnames/bind";
import classes from "./account.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`account`);
  const cnInner = cn(`account__inner`);
  const cnTabsList = cn(`account__tabs-list`);
  const cnTabsTitle = cn(`account__tabs-title`);
  const cnTitle = cn(`account__title`);
  const cnText = cn(`account__text`);
  const cnForm = cn(`account__form`);
  const cnLinkWrap = cn(`account__link-wrapper`);

  return {
    cnRoot,
    cnInner,
    cnTabsList,
    cnTabsTitle,
    cnTitle,
    cnText,
    cnForm,
    cnLinkWrap,
  };
};
