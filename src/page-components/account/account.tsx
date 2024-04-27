import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { useState } from "react";
import { Login } from "@/widgets/account-tabs/login";
import { CreateAccount } from "@/widgets/account-tabs/create-account";
import { Checkout } from "@/widgets/account-tabs/checkout";
import {
  getIsUserAuthorized,
  getUserToken,
} from "@/entities/user/model/selectors";
import { useAppSelector } from "@/shared/redux/hooks";
import { Tab, Tabs } from "@/shared/ui/tabs/tabs";
import { FinalStep } from "@/widgets/account-tabs/final-step";
import { useBuySubscribeMutation } from "@/entities/payments/api";
import { useRouter } from "next/router";

export const Account = () => {
  const { cnRoot, cnInner, cnTabsList } = useClasses();

  const [buySubscribe] = useBuySubscribeMutation();

  const router = useRouter();

  const token = useAppSelector(getUserToken);

  const { id } = router.query;

  const isUserAuthorized = useAppSelector(getIsUserAuthorized);

  const [isStartSubs, setStartSubs] = useState(false);

  const [selectedTab, setSelectedTab] = useState(
    isUserAuthorized ? "checkout" : "create-account"
  );

  const onTabClick = (id: string) => {
    setSelectedTab(id);
  };

  const goToLogin = () => {
    setSelectedTab("login");
  };

  const goToCheckout = () => {
    setSelectedTab("checkout");
  };

  const buySubs = () => {
    const priceId = Number(id);
    console.log(priceId);
    const data = {
      token,
      priceId,
    };
    buySubscribe(data);
    setStartSubs(true);
  };

  const TABS: Tab[] = [
    {
      id: "create-account",
      text: "Create account",
      content: <CreateAccount callback={goToLogin} />,
      disabled: isUserAuthorized,
    },
    {
      id: "login",
      text: "Log in",
      disabled: isUserAuthorized,
      content: <Login callback={goToCheckout} />,
    },
    {
      id: "checkout",
      text: "Checkout",
      disabled: !isUserAuthorized,
      content: <Checkout onClick={buySubs} />,
    },
  ];

  return (
    <section className={cnRoot}>
      <Container className={cnInner}>
        {!isStartSubs && (
          <Tabs
            className={cnTabsList}
            tabs={TABS}
            defaultTab={selectedTab}
            onTabClick={onTabClick}
          />
        )}
        {isStartSubs && <FinalStep />}
      </Container>
    </section>
  );
};
