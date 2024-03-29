import React, { FC, PropsWithChildren } from "react";
import { useClasses } from "./lib/use-classes";

export type MainProps = {
  className?: string;
} & PropsWithChildren;

const Main: FC<MainProps> = ({ children, className }) => {
  const { cnRoot } = useClasses({ className });
  return <main className={cnRoot}>{children}</main>;
};

export default Main;
