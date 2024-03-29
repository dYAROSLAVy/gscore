import { FC, PropsWithChildren } from "react";
import { useClasses } from "./lib/use-classes";

export type WrapperProps = {
  className?: string;
} & PropsWithChildren;

export const Wrapper: FC<WrapperProps> = ({ className, children }) => {
  const { cnRoot } = useClasses({ className });
  return <div className={cnRoot}>{children}</div>;
};
