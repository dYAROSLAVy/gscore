import React, { FC, PropsWithChildren } from "react";
import { useClasses } from "./styles/use-classes";

export type MainProps = {
  className?: string;
} & PropsWithChildren;

export const Main: FC<MainProps> = ({ children, className }) => {
  const { cnRoot } = useClasses({ className });
  return <main className={cnRoot}>{children}</main>;
};


