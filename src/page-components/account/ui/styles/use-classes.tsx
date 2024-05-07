import classNames from "classnames/bind";
import classes from "./account.module.scss";

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn(`account`);
  const cnInner = cn(`account__inner`);
  const cnTabsList = cn(`account__tabs-list`);
  
  return {
    cnRoot,
    cnInner,
    cnTabsList,
  };
};
