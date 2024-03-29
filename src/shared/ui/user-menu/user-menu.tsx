import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { ArrowDownIcon } from "@/shared/icons/arrow-down";

export type UserMenuProps = {
  userName?: string;
  className?: string;
};

export const UserMenu: FC<UserMenuProps> = ({ className, userName }) => {
  const { cnRoot, cnButton } = useClasses({ className });
  return (
    <div className={cnRoot}>
      <span>My subscriptions</span>
      <button className={cnButton}>
        <span>{userName}</span>
        <ArrowDownIcon></ArrowDownIcon>
      </button>
    </div>
  );
};
