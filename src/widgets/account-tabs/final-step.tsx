import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import { useRouter } from "next/router";
import { CheckoutCard } from "@/shared/ui/checkout-card/checkout-card";

export const FinalStep = () => {
  const { cnTitle, cnText, cnTextWrap, cnCard, cnButtonPrimary } = useClasses();
  const router = useRouter();
  const { name, price } = router.query;

  return (
    <>
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Start your subscription</h2>
        <p className={cnText}>
          We have sent you a payment receipt by e-mail and a link to download
          the plugin with a license key.
        </p>
      </div>
      <CheckoutCard className={cnCard} price={price} sites={name} />
      <ButtonPrimary
        onClick={() => router.push("/subscriptions")}
        className={cnButtonPrimary}
      >
        Go to my subscriptions
      </ButtonPrimary>
    </>
  );
};
