import { LogoMain } from "@/shared/icons/logo";
import { useClasses } from "./lib/use-classes";
import { Container } from "@/shared/ui/container/container";
import { FC } from "react";
import { UserMenu } from "@/shared/ui/user-menu/user-menu";

export type HeaderProps = {
  className?: string;
  isLogin?: boolean;
  userName?: string;
};

export const Header: FC<HeaderProps> = ({ className, isLogin, userName }) => {
  const { cnRoot, cnContainer } = useClasses({ className });
  return (
    <header className={cnRoot}>
      <Container className={cnContainer}>
        <LogoMain></LogoMain>
        {isLogin && <UserMenu userName={userName}></UserMenu>}
      </Container>
    </header>
  );
};
