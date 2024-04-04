import { LogoMain } from "@/shared/icons/logo";
import { useClasses } from "./styles/use-classes";
import { Container } from "@/shared/ui/container/container";
import { FC } from "react";
import { UserMenu } from "@/shared/ui/user-menu/user-menu";

export type HeaderProps = {
  className?: string;
  isLogin?: boolean;
  userName?: string;
  isSubscriptions?: boolean;
};

export const Header: FC<HeaderProps> = ({ className, isLogin, userName, isSubscriptions }) => {
  const { cnRoot, cnContainer } = useClasses({ className });
  return (
    <header className={cnRoot}>
      <Container className={cnContainer}>
        <a href="/">
          <LogoMain/>
        </a>
        {isLogin && <UserMenu isSubscriptions={isSubscriptions} userName={userName}/>}
      </Container>
    </header>
  );
};
