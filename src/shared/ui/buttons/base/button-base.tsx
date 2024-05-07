import { ButtonHTMLAttributes, FC } from "react";
import { useClasses } from "./styles/use-classes";
import { Spinner } from "../../spinner/spinner";

export type ButtonBaseProps = {
  isLoading?: boolean;
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonBase: FC<ButtonBaseProps> = ({
  children,
  isLoading,
  className,
  type,
  ...props
}) => {
  const { cnRoot } = useClasses({
    className,
  });

  return (
    <button className={cnRoot} {...props} type={type}>
      {!isLoading && <span>{children}</span>}
      {isLoading && <Spinner />}
    </button>
  );
};
