import { FC, forwardRef } from "react";
import { useClasses } from "./styles/use-classes";
import { BaseInputProps } from "../inputs/base/input-base";
import { CheckIcon } from "@/shared/icons/check";

export const Checkbox = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, label, ...props }, ref) => {
    const { cnRoot, cnDecor } = useClasses({ className });
    return (
      <div className={cnRoot}>
        <label>
          <span className="visually-hidden">{label}</span>
          <input
            className={"visually-hidden"}
            type="checkbox"
            {...props}
            ref={ref}
          />
          <span className={cnDecor}>
            <CheckIcon />
          </span>
        </label>
      </div>
    );
  }
);
