import classNames from "classnames/bind";
import classes from "../spinner.module.scss";
import { LoaderIconProps } from "@/shared/icons/loader";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: LoaderIconProps) => {
  const cnRoot = cn(`spinner`, className);
  return {
    cnRoot,
  };
};
