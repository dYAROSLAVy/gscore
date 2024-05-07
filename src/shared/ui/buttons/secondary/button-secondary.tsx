import { FC } from "react";
import { ButtonBase, ButtonBaseProps } from "../base/button-base";
import { useClasses } from "./styles/use-classes";

export const ButtonSecondary: FC<ButtonBaseProps> = ({
  className,
  children,
  type,
  ...props
}) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ButtonBase className={cnRoot} type={type} {...props}>
      {children}
    </ButtonBase>
  );
};
