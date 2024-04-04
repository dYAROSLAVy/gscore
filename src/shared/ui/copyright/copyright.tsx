import { useClasses } from "./styles/use-classes";
import { FC } from "react";

export type CopyrightProps = {
  className?: string;
};

export const Copyright: FC<CopyrightProps> = ({ className }) => {
  const { cnRoot, cnText, cnLink } = useClasses({ className });
  return (
    <ul className={cnRoot}>
      <li>
        <span className={cnText}>Copyright © 2022 GScore</span>
      </li>
      <li>
        <span className={cnText}>All Rights Reserved</span>
      </li>
      <li>
        <a className={cnLink} href="/" target="_blank">
          Cookies
        </a>
      </li>
      <li>
        <a className={cnLink} href="/" target="_blank">
          Privacy Policy
        </a>
      </li>
    </ul>
  );
};
