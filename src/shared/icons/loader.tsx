import { FC, SVGProps } from "react";
import Loader from "../assets/svg/loader.svg";

export type LoaderIconProps = SVGProps<SVGSVGElement>;

export const LoaderIcon: FC<LoaderIconProps> = (props) => (
  <Loader width="24" height="24" {...props} />
);
