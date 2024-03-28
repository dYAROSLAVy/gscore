import { FC } from "react";
import { ButtonBase, BaseButtonProps } from "../base/button-base";
import { CopyIcon } from "@/shared/icons/copy";
import { useClasses } from "./lib/use-classes";

export const ButtonCopy: FC<BaseButtonProps> = ({ className }) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ButtonBase className={cnRoot}>
      <CopyIcon></CopyIcon>
    </ButtonBase>
  );
};
