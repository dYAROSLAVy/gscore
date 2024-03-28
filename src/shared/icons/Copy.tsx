import { FC, SVGProps } from "react";
import Copy from "../assets/svg/copy.svg";

export type CopyIconProps = SVGProps<SVGSVGElement>;

export const CopyIcon: FC<CopyIconProps> = (props) => (
  <Copy width="32" height="32" {...props} />
);
