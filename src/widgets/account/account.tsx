import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { ButtonTabPrimary } from "@/shared/ui/buttons/tab/primary/button-tab-primary";
import { FC, useState } from "react";
import { CheckoutCard } from "@/shared/ui/checkout-card/checkout-card";

export type AccountProps = {
  price: number;
  sites: string;
};

export const Account: FC<AccountProps> = ({ price, sites }) => {
  const {
    cnRoot,
    cnInner,
    cnTabsList,
    cnTitle,
    cnText,
    cnForm,
    cnLinkWrap,
    cnTextWrap,
    cnTotalWrap,
    cnCard,
    cnButton,
    cnButtonPrimary,
  } = useClasses();

  const [showLoginTab, setShowLoginTab] = useState(false);
  const [showCheckoutTab, setShowCheckoutTab] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

  const activeLoginTab = () => {
    setShowLoginTab(true);
  };

  const deactivateLoginTab = () => {
    setShowLoginTab(false);
  };

  const activeCheckoutTab = () => {
    setShowCheckoutTab(true);
  };

  const openSubscription = () => {
    setShowSubscription(true);
  };

  return (
    <section className={cnRoot}>
      <Container className={cnInner}>
        {!showLoginTab && (
          <>
            <ul className={cnTabsList}>
              <li>
                <ButtonTabPrimary children={"Create account"} isActive={true} />
              </li>
              <li>
                <ButtonTabPrimary children={"Log in"} onClick={activeLoginTab} />
              </li>
              <li>
                <ButtonTabPrimary children={"Checkout"} />
              </li>
            </ul>
            <div className={cnTextWrap}>
              <h2 className={cnTitle}>Create account</h2>
              <p className={cnText}>
                You need to enter your name and email. We will send you a
                temporary password by email
              </p>
            </div>
            <form className={cnForm}>
              <InputPrimary placeholder="UserName" />
              <InputPrimary placeholder="Email" />
              <InputPrimary placeholder="Password" />
              <ButtonPrimary className={cnButton} children="Send password" />
            </form>
            <p className={cnLinkWrap}>
              <span>Have an account?</span>
              <a onClick={activeLoginTab}>Go to the next step</a>
            </p>
          </>
        )}
        {showLoginTab && !showCheckoutTab && (
          <>
            <ul className={cnTabsList}>
              <li>
                <ButtonTabPrimary
                  children={"Create account"}
                  isActive={true}
                  onClick={deactivateLoginTab}
                />
              </li>
              <li>
                <ButtonTabPrimary children={"Log in"} isActive={true} />
              </li>
              <li>
                <ButtonTabPrimary children={"Checkout"} />
              </li>
            </ul>
            <div className={cnTextWrap}>
              <h2 className={cnTitle}>Log in</h2>
            </div>
            <form className={cnForm}>
              <InputPrimary placeholder="Email" />
              <InputPrimary placeholder="Password" />
            </form>
            <ButtonPrimary
              className={cnButton}
              children="Log in"
              onClick={activeCheckoutTab}
            />
          </>
        )}
        {showCheckoutTab && !showSubscription && (
          <>
            <ul className={cnTabsList}>
              <li>
                <ButtonTabPrimary children={"Create account"} isActive={true} />
              </li>
              <li>
                <ButtonTabPrimary children={"Login"} isActive={true} />
              </li>
              <li>
                <ButtonTabPrimary children={"Checkout"} isActive={true} />
              </li>
            </ul>
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
            <ButtonPrimary
              className={cnButton}
              onClick={openSubscription}
              children="Purchase"
            />
          </>
        )}
        {showSubscription && (
          <>
            <div className={cnTextWrap}>
              <h2 className={cnTitle}>Start your subscription</h2>
              <p className={cnText}>
                We have sent you a payment receipt by e-mail and a link to
                download the plugin with a license key.
              </p>
            </div>
            <CheckoutCard className={cnCard} price={price} sites={sites} />
            <ButtonPrimary
              className={cnButtonPrimary}
              children="Go to my subscriptions"
            />
          </>
        )}
      </Container>
    </section>
  );
};
