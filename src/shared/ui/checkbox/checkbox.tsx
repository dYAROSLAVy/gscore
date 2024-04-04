import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { BaseInputProps } from "../inputs/base/input-base";
import { CheckIcon } from "@/shared/icons/check";

export const Checkbox: FC<BaseInputProps> = ({ className, ...props }) => {
  const { cnRoot, cnDecor } = useClasses({
    className,
  });
  return (
    <div className={cnRoot}>
      <label>
        <input className={"visually-hidden"} type="checkbox" {...props} />
        <span className={cnDecor}>
          <CheckIcon />
        </span>
      </label>
    </div>
  );
};
