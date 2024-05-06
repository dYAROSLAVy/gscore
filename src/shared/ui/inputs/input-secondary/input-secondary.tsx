import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { BaseInputProps, InputBase } from "../base/input-base";

export const InputSecondary: FC<BaseInputProps> = ({
  children,
  className,
  label,
  ...props
}) => {
  const { cnRoot } = useClasses({ className });
  return (
    <InputBase className={cnRoot} {...props}>
      <span className="visually-hidden">{label}</span>
      {children}
    </InputBase>
  );
};
