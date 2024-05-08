import classNames from "classnames/bind";
import classes from "./settings-tabs.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnForm = cn(`settings-tab__form`);
  const cnTitle = cn(`settings-tab__title`);
  const cnButton = cn(`settings-tab__button`);

  return {
    cnForm,
    cnTitle,
    cnButton,
  };
};
