import { FC, PropsWithChildren } from "react";
import { useClasses } from "./lib/use-classes";

export type ContainerProps = {
  className?: string;
} & PropsWithChildren;

const Container: FC<ContainerProps> = ({ children, className }) => {
  const { cnRoot } = useClasses({ className });
  return <div className={cnRoot}>{children}</div>;
};

export { Container };
