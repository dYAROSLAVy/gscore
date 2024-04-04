import { FC } from "react";
import { ButtonBase, ButtonBaseProps } from "../base/button-base";
import { CopyIcon } from "@/shared/icons/copy";
import { useClasses } from "./styles/use-classes";

export const ButtonCopy: FC<ButtonBaseProps> = ({ className }) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ButtonBase className={cnRoot}>
      <CopyIcon />
    </ButtonBase>
  );
};
