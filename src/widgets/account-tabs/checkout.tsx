import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import { ButtonTabPrimary } from "@/shared/ui/buttons/tab/primary/button-tab-primary";
import { CheckoutCard } from "@/shared/ui/checkout-card/checkout-card";
import { FC } from "react";

export type CheckoutProps = {
  price: number;
  sites: string;
};

export const Checkout: FC<CheckoutProps> = ({ price, sites }) => {
  const { cnTitle, cnTextWrap, cnButton, cnTotalWrap, cnCard } =
    useClasses();

  return (
    <>
      <ButtonTabPrimary children={"Checkout"} isActive={true} />
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Checkout</h2>
      </div>
      <CheckoutCard
        className={cnCard}
        price={price}
        sites={sites}
        basket={true}
      />
      <div className={cnTotalWrap}>
        <span>Total</span>
        <span>${price}</span>
      </div>
      <ButtonPrimary className={cnButton} children="Purchase" />
    </>
  );
};
