import { FC, PropsWithChildren } from "react";
import { useClasses } from "./styles/use-classes";

export type ContainerProps = {
  className?: string;
} & PropsWithChildren;

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const { cnRoot } = useClasses({ className });
  return <div className={cnRoot}>{children}</div>;
};
