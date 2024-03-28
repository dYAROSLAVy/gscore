import { ButtonHTMLAttributes, FC } from "react";
import { useClasses } from "./lib/use-classes";
import { Spinner } from "../../spinner/spinner";

export type BaseButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonBase: FC<BaseButtonProps> = ({
  children,
  isLoading,
  className,
  ...props
}) => {
  const { cnRoot } = useClasses({
    className,
  });

  return (
    <button className={cnRoot} {...props}>
      {!isLoading && <span>{children}</span>}
      {isLoading && <Spinner />}
    </button>
  );
};
