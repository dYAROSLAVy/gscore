import { FC } from "react";
import { ButtonBase, ButtonBaseProps } from "../base/button-base";
import { useClasses } from "./styles/use-classes";

export const ButtonPrimary: FC<ButtonBaseProps> = ({
  className,
  children,
  ...props
}) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ButtonBase className={cnRoot} {...props}>
      {children}
    </ButtonBase>
  );
};
