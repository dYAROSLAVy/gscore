import { FC, InputHTMLAttributes } from "react";
import { useClasses } from "./styles/use-classes";

export type BaseInputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const InputBase: FC<BaseInputProps> = ({
  className,
  children,
  type,
  ...props
}) => {
  const { cnRoot, cnField } = useClasses({ className });
  return (
    <div className={cnRoot}>
      <label>
        <input className={cnField} type={type} {...props}></input>
        {children}
      </label>
    </div>
  );
};
