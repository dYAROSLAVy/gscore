import classNames from "classnames/bind";
import classes from "./settings.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`settings`);
  const cnCont = cn(`settings__container`);
  const cnTitle = cn(`settings__title`);
  const cnTabsWrap = cn(`settings__tabs-wrapper`);
  const cnTabButton = cn(`settings__tab-button`);
  const cnForm = cn(`settings__form`);
  const cnFormTitle = cn(`settings__form-title`);
  const cnFormButton = cn(`settings__form-button`);

  return {
    cnRoot,
    cnCont,
    cnTitle,
    cnTabButton,
    cnTabsWrap,
    cnFormTitle,
    cnForm,
    cnFormButton,
  };
};
