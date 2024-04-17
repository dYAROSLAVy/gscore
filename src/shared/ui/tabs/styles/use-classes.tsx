import classNames from "classnames/bind";
import classes from "./tabs.module.scss";
import { TabsProps } from "../tabs";

const cn = classNames.bind(classes);

export const useClasses = ({className}: Pick<TabsProps, "className">) => {
  const cnRoot = cn(`tabs`, className);

  return {
    cnRoot,
  };
};
