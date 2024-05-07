import { forwardRef } from "react";
import { useClasses } from "./styles/use-classes";
import { BaseInputProps, InputBase } from "../base/input-base";

export const InputPrimary = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ children, className, label, ...props }, ref) => {
    const { cnRoot } = useClasses({ className });
    return (
      <InputBase className={cnRoot} {...props} ref={ref}>
        <span className="visually-hidden">{label}</span>
        {children}
      </InputBase>
    );
  }
);
