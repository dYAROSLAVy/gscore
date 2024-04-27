import { LogoMain } from "@/shared/icons/logo";
import { useClasses } from "./styles/use-classes";
import { Container } from "@/shared/ui/container/container";
import { FC } from "react";
import { UserMenu } from "@/shared/ui/user-menu/user-menu";
import Link from "next/link";
import { useAppSelector } from "@/shared/redux/hooks";
import { getIsUserAuthorized, getUserName } from "@/entities/user/model/selectors";

export type HeaderProps = {
  className?: string;
  isSubscriptions?: boolean;
};

export const Header: FC<HeaderProps> = ({ className, isSubscriptions }) => {
  const { cnRoot, cnContainer } = useClasses({ className });
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const userName = useAppSelector(getUserName);
  return (
    <header className={cnRoot}>
      <Container className={cnContainer}>
        <Link href="/">
          <LogoMain />
        </Link>
        {isUserAuthorized && (
          <UserMenu isSubscriptions={isSubscriptions} userName={userName} />
        )}
      </Container>
    </header>
  );
};
