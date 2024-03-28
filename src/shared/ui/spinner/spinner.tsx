import { LoaderIcon, LoaderIconProps } from "@/shared/icons/loader";
import { useClasses } from "./lib/use-classes";
import { FC } from "react";

export const Spinner: FC<LoaderIconProps> = ({ className }) => {
  const { cnRoot } = useClasses({
    className,
  });
  return <LoaderIcon className={cnRoot} />;
};
