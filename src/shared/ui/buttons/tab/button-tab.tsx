import { FC } from "react";
import { ButtonBaseProps, ButtonBase } from "../base/button-base";
import { useClasses } from "./styles/use-classes";

export const ButtonTab: FC<ButtonBaseProps> = ({
  className,
  children,
  isActive,
  ...props
}) => {
  const { cnRoot } = useClasses({
    className,
    isActive,
  });

  return (
    <ButtonBase className={cnRoot} {...props}>
      {children}
    </ButtonBase>
  );
};
