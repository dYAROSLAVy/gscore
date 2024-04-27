import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { BasketIcon } from "@/shared/icons/basket";

export type CheckoutCardProps = {
  price?: string | string[];
  sites?: string | string[];
  className?: string;
  basket?: true;
};

export const CheckoutCard: FC<CheckoutCardProps> = ({
  sites,
  price,
  className,
  basket,
}) => {
  const { cnRoot, cnCardTopInner, cnCardBottomInner, cnPrice } = useClasses({
    className,
  });
  return (
    <div className={cnRoot}>
      <div className={cnCardTopInner}>
        <span>Package name</span>
        <span>Price</span>
      </div>
      <div className={cnCardBottomInner}>
        <span>
          {sites === "1" ? "Single site license" : `${sites} Site license`}
        </span>
        <span className={cnPrice}>
          ${price}
          {basket && <BasketIcon />}
        </span>
      </div>
    </div>
  );
};
