import { LogoMain } from "@/shared/icons/logo";
import { useClasses } from "./styles/use-classes";
import { Container } from "@/shared/ui/container/container";
import { FC } from "react";
import { UserMenu } from "@/shared/ui/user-menu/user-menu";
import Link from "next/link";
import { useAppSelector } from "@/shared/redux/hooks";

import { useRouter } from "next/router";
import { getIsUserAuthorized, getUserName } from "@/entities/user";

export type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  const { cnRoot, cnContainer, cnLogo } = useClasses({ className });

  const isUserAuthorized = useAppSelector(getIsUserAuthorized);

  const userName = useAppSelector(getUserName);

  const router = useRouter();

  const isSubscriptions = router.pathname === "/subscriptions";

  return (
    <header className={cnRoot}>
      <Container className={cnContainer}>
        <Link href="/" className={cnLogo}>
          <span className="visually-hidden">Main</span>
          <LogoMain />
        </Link>
        {isUserAuthorized && (
          <UserMenu isSubscriptions={isSubscriptions} userName={userName} />
        )}
      </Container>
    </header>
  );
};
