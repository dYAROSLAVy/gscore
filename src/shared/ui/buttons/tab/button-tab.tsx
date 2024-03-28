import { FC } from "react";
import { ButtonBaseProps, ButtonBase } from "../base/button-base";
import { useClasses } from "./lib/use-classes";

export const ButtonTab: FC<ButtonBaseProps> = ({ className, children }) => {
  const { cnRoot } = useClasses({
    className,
  });

  return <ButtonBase className={cnRoot}>{children}</ButtonBase>;
};
