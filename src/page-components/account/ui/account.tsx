import { Container } from "@/shared/ui/container/container";
import { useClasses } from "@/page-components/account/ui/styles/use-classes";
import { useState } from "react";
import { useAppSelector } from "@/shared/redux/hooks";
import { Tab, Tabs } from "@/shared/ui/tabs/tabs";
import { useRouter } from "next/router";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import {
  Checkout,
  CreateAccount,
  FinalStep,
  Login,
} from "@/widgets/account-tabs";
import { getIsUserAuthorized, getUserToken } from "@/entities/user";
import { useBuySubscribeMutation } from "@/entities/payments";

export const Account = () => {
  const { cnRoot, cnInner, cnTabsList } = useClasses();

  const [buySubscribe, { isLoading }] = useBuySubscribeMutation();

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

  const buySubs = async () => {
    try {
      const priceId = Number(id);
      const data = {
        token,
        priceId,
      };
      await buySubscribe(data).unwrap();
      setStartSubs(true);
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        alert(error.data.message);
      }
    }
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
      content: <Checkout onClick={buySubs} isLoading={isLoading} />,
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
