import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { FC, useState } from "react";
import { Login } from "@/widgets/account-tabs/login";
import { CreateAccount } from "@/widgets/account-tabs/create-account";
import { Checkout } from "@/widgets/account-tabs/checkout";
import { getIsUserAuthorized } from "@/entities/user/model/selectors";
import { useAppSelector } from "@/shared/redux/hooks";
import { Tab, Tabs } from "@/shared/ui/tabs/tabs";
import { FinalStep } from "@/widgets/account-tabs/final-step";

export type AccountProps = {
  price: number;
  sites: string;
};

export const Account: FC<AccountProps> = ({ price, sites }) => {
  const { cnRoot, cnInner, cnTabsList } = useClasses();

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

  const showStartSubs = () => {
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
      content: <Checkout price={price} sites={sites} onClick={showStartSubs} />,
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
        {isStartSubs && <FinalStep price={price} sites={sites} />}
      </Container>
    </section>
  );
};
