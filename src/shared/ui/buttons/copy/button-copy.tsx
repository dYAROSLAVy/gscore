import { FC } from "react";
import { ButtonBase, ButtonBaseProps } from "../base/button-base";
import { CopyIcon } from "@/shared/icons/copy";
import { useClasses } from "./styles/use-classes";

export const ButtonCopy: FC<ButtonBaseProps> = ({
  className,
  type,
  onClick,
}) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ButtonBase className={cnRoot} type={type} onClick={onClick}>
      <span className="visually-hidden">Copy</span>
      <CopyIcon />
    </ButtonBase>
  );
};
