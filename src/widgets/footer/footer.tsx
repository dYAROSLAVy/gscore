import { LogoMain } from "@/shared/icons/logo";
import { useClasses } from "./styles/use-classes";
import { FC } from "react";
import { Socials } from "@/shared/ui/socials/socials";
import { Copyright } from "@/shared/ui/copyright/copyright";
import { Container } from "@/shared/ui/container/container";

export type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  const { cnRoot, cnTopInner, cnBottomInner } = useClasses({ className });
  return (
    <footer className={cnRoot}>
      <Container>
        <div className={cnTopInner}>
          <a href="/">
            <LogoMain></LogoMain>
          </a>
          <p>Ut enim ad minim veniam quis nostrud exercitation ea commodo</p>
        </div>
        <div className={cnBottomInner}>
          <Copyright></Copyright>
          <Socials></Socials>
        </div>
      </Container>
    </footer>
  );
};
