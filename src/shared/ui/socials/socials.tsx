import { FacebookIcon } from "@/shared/icons/facebook";
import { useClasses } from "./lib/use-classes";
import { FC } from "react";
import { TwitterIcon } from "@/shared/icons/twitter";
import { LinkedinIcon } from "@/shared/icons/linkedin";

export type SocialsProps = {
  className?: string;
};

export const Socials: FC<SocialsProps> = ({ className }) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ul className={cnRoot}>
      <li>
        <a href="/" target="_blank">
          <FacebookIcon></FacebookIcon>
        </a>
      </li>
      <li>
        <a href="/" target="_blank">
          <TwitterIcon></TwitterIcon>
        </a>
      </li>
      <li>
        <a href="/" target="_blank">
          <LinkedinIcon></LinkedinIcon>
        </a>
      </li>
    </ul>
  );
};
