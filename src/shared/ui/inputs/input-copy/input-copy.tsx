import { FC, useRef } from "react";
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

  const textRef = useRef<HTMLInputElement>(null);

  const copyText = () => {
    if (textRef.current) {
      return navigator.clipboard.writeText(textRef.current.value);
    }
  };

  return (
    <InputSecondary className={cnRoot} {...props} ref={textRef}>
      <ButtonCopy className={cnBtn} type={"button"} onClick={copyText} />
    </InputSecondary>
  );
};
