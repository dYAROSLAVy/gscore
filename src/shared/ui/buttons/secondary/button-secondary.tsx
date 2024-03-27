import { FC } from "react";
import { BaseButton, BaseButtonProps } from "../base/base-button";
import styles from "./button-secondary.module.scss";

export const SecondaryButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton className={styles.secondary} {...props}>
      {children}
    </BaseButton>
  );
};
