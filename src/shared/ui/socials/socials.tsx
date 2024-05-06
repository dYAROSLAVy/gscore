import { FacebookIcon } from "@/shared/icons/facebook";
import { useClasses } from "./styles/use-classes";
import { FC } from "react";
import { TwitterIcon } from "@/shared/icons/twitter";
import { LinkedinIcon } from "@/shared/icons/linkedin";
import Link from "next/link";

export type SocialsProps = {
  className?: string;
};

export const Socials: FC<SocialsProps> = ({ className }) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ul className={cnRoot}>
      <li>
        <Link href="/" target="_blank">
          <span className="visually-hidden">Facebook</span>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link href="/" target="_blank">
          <span className="visually-hidden">Twitter</span>
          <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link href="/" target="_blank">
          <span className="visually-hidden">Linkedin</span>
          <LinkedinIcon />
        </Link>
      </li>
    </ul>
  );
};
