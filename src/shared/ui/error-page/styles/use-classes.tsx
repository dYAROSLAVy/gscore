import classNames from "classnames/bind";
import classes from "./error-page.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`error-page`);
  const cnTitle = cn(`error-page__title`);
  const cnText = cn(`error-page__text`);
  const cnCloseDecor = cn(`error-page__close-decor`);
  const cnButton = cn(`error-page__button`);
  return {
    cnRoot,
    cnText,
    cnTitle,
    cnCloseDecor,
    cnButton,
  };
};
