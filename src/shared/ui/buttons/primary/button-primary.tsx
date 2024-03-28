import { FC } from "react";
import { ButtonBase, BaseButtonProps } from "../base/button-base";
import { useClasses } from "./lib/use-classes";

export const ButtonPrimary: FC<BaseButtonProps> = ({
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
