import { ButtonHTMLAttributes, FC } from "react";
import styles from "./base-button.module.scss";
import { Spinner } from "../../spinner/spinner";

export type BaseButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  isLoading,
  className,
  ...props
}) => {
  return (
    <button className={className + " " + styles.button} {...props}>
      {!isLoading && <span>{children}</span>}
      {isLoading && <Spinner />}
    </button>
  );
};
