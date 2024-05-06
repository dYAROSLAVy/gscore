import { LogoMain } from "@/shared/icons/logo";
import { useClasses } from "./styles/use-classes";
import { FC } from "react";
import { Socials } from "@/shared/ui/socials/socials";
import { Copyright } from "@/shared/ui/copyright/copyright";
import { Container } from "@/shared/ui/container/container";
import Link from "next/link";

export type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  const { cnRoot, cnTopInner, cnBottomInner, cnText, cnLogo } = useClasses({
    className,
  });
  return (
    <footer className={cnRoot}>
      <Container>
        <div className={cnTopInner}>
          <Link href="/" className={cnLogo}>
            <span className="visually-hidden">Main</span>
            <LogoMain />
          </Link>
          <p className={cnText}>
            Ut enim ad minim veniam quis nostrud exercitation ea commodo
          </p>
        </div>
        <div className={cnBottomInner}>
          <Copyright />
          <Socials />
        </div>
      </Container>
    </footer>
  );
};
