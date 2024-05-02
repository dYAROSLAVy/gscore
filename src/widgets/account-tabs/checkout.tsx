import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import { CheckoutCard } from "@/shared/ui/checkout-card/checkout-card";
import { FC } from "react";
import { useRouter } from "next/router";

export type CheckoutProps = {
  onClick?: () => void;
  isLoading?: boolean;
};

export const Checkout: FC<CheckoutProps> = ({ onClick, isLoading }) => {
  const { cnTitle, cnTextWrap, cnButton, cnTotalWrap, cnCard } = useClasses();
  const router = useRouter();
  const { name, price } = router.query;

  return (
    <>
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Checkout</h2>
      </div>
      <CheckoutCard
        className={cnCard}
        price={price}
        sites={name}
        basket={true}
      />
      <div className={cnTotalWrap}>
        <span>Total</span>
        <span>${price}</span>
      </div>
      <ButtonPrimary
        className={cnButton}
        onClick={onClick}
        disabled={isLoading}
      >
        Purchase
      </ButtonPrimary>
    </>
  );
};
