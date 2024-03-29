import classNames from "classnames/bind";
import classes from "./socials.module.scss";
import { SocialsProps } from "../socials";

const cn = classNames.bind(classes);

export const useClasses = ({ className }: SocialsProps) => {
  const cnRoot = cn(`socials`, className);
  return {
    cnRoot,
  };
};
