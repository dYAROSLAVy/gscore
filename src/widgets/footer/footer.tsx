import { LogoMain } from "@/shared/icons/logo";
import { useClasses } from "./lib/use-classes";
import { Container } from "@/shared/ui/container/container";
import { FC } from "react";
import { Socials } from "@/shared/ui/socials/socials";
import { Copyright } from "@/shared/ui/copyright/copyright";

export type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  const { cnRoot, cnTopInner, cnBottomInner } = useClasses({ className });
  return (
    <footer className={cnRoot}>
      <Container>
        <div className={cnTopInner}>
          <LogoMain></LogoMain>
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
