import classNames from "classnames/bind";
import classes from "./settings.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`settings`);
  const cnCont = cn(`settings__container`);
  const cnTitle = cn(`settings__title`);
  const cnTabsWrap = cn(`settings__tabs-wrapper`);

  return {
    cnRoot,
    cnCont,
    cnTitle,
    cnTabsWrap,
  };
};
