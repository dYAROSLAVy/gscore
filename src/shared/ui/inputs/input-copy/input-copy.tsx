import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { BaseInputProps } from "../base/input-base";
import { InputSecondary } from "../input-secondary/input-secondary";
import { ButtonCopy } from "../../buttons/copy/button-copy";

export const InputCopy: FC<BaseInputProps> = ({
  children,
  className,
  ...props
}) => {
  const { cnRoot, cnBtn } = useClasses({ className });
  return (
    <InputSecondary className={cnRoot} {...props}>
      <ButtonCopy className={cnBtn} />
    </InputSecondary>
  );
};
