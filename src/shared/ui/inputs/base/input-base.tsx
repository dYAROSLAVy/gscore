import { FC, forwardRef, InputHTMLAttributes } from "react";
import { useClasses } from "./styles/use-classes";

export type BaseInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputBase = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ type, children, className, ...props }, ref) => {
    const { cnRoot, cnField } = useClasses({ className });
    return (
      <div className={cnRoot}>
        <label>
          <input className={cnField} type={type} {...props} ref={ref} />
          {children}
        </label>
      </div>
    );
  }
);
