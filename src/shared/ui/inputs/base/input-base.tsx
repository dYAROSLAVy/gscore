import { FC, forwardRef, InputHTMLAttributes } from "react";
import { useClasses } from "./styles/use-classes";
import { CloseIcon } from "@/shared/icons/close";

export type BaseInputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputBase = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ type, children, className, error, ...props }, ref) => {
    const { cnRoot, cnField, cnError } = useClasses({ className, error });
    return (
      <div className={cnRoot}>
        <label>
          <input className={cnField} type={type} {...props} ref={ref} />
          {error && <CloseIcon />}
          {children}
          {error && <span className={cnError}>{error}</span>}
        </label>
      </div>
    );
  }
);
