import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import router from "next/router";
import { CheckoutCard } from "@/shared/ui/checkout-card/checkout-card";
import { FC } from "react";
import { CheckoutProps } from "./checkout";

export const FinalStep: FC<CheckoutProps> = ({ price, sites }) => {
  const { cnTitle, cnText, cnTextWrap, cnCard, cnButtonPrimary } = useClasses();

  return (
    <>
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Start your subscription</h2>
        <p className={cnText}>
          We have sent you a payment receipt by e-mail and a link to download
          the plugin with a license key.
        </p>
      </div>
      <CheckoutCard className={cnCard} price={price} sites={sites} />
      <ButtonPrimary
        onClick={() => router.push("/subscriptions")}
        className={cnButtonPrimary}
        children="Go to my subscriptions"
      />
    </>
  );
};
