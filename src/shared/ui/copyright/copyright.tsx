import { useClasses } from "./styles/use-classes";
import { FC } from "react";

export type CopyrightProps = {
  className?: string;
};

export const Copyright: FC<CopyrightProps> = ({ className }) => {
  const { cnRoot } = useClasses({ className });
  return (
    <ul className={cnRoot}>
      <li>
        <span>Copyright © 2022 GScore</span>
      </li>
      <li>
        <span>All Rights Reserved</span>
      </li>
      <li>
        <a href="/" target="_blank">
          Cookies
        </a>
      </li>
      <li>
        <a href="/" target="_blank">
          Privacy Policy
        </a>
      </li>
    </ul>
  );
};
