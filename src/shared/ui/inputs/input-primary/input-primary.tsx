import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { BaseInputProps, InputBase } from "../base/input-base";

export const InputPrimary: FC<BaseInputProps> = ({
  children,
  className,
  ...props
}) => {
  const { cnRoot } = useClasses({ className });
  return <InputBase className={cnRoot} {...props}>
    {children}
  </InputBase>;
};
