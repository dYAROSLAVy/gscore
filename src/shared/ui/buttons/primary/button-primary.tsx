import { FC } from "react";
import { BaseButton, BaseButtonProps } from "../base/base-button";
import styles from "./button-primary.module.scss";

export const PrimaryButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton className={styles.primary} {...props}>
      {children}
    </BaseButton>
  );
};
