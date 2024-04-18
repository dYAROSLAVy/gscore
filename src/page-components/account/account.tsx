import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { FC, useState } from "react";
import { Login } from "@/widgets/account-tabs/login";
import { CreateAccount } from "@/widgets/account-tabs/create-account";
import { Checkout } from "@/widgets/account-tabs/checkout";
import { getIsUserAuthorized } from "@/store/user/selectors";
import { useAppSelector } from "@/store/hooks";
import { Tab, Tabs } from "@/shared/ui/tabs/tabs";
import { FinalStep } from "@/widgets/account-tabs/final-step";

export type AccountProps = {
  price: number;
  sites: string;
};

export const Account: FC<AccountProps> = ({ price, sites }) => {
  const { cnRoot, cnInner, cnTabsList } = useClasses();

  const isUserAuthorized = useAppSelector(getIsUserAuthorized);

  // пока не сделал чтоб срабатывало неоднократно
  const [isLogin, setLoginTab] = useState(false);
  const [isStartSubs, setStartSubs] = useState(false);

  let defaultTab = isUserAuthorized
    ? "checkout"
    : isLogin
    ? "login"
    : undefined;

  const goToLogin = () => {
    setLoginTab(true);
    defaultTab = undefined;
  };

  const showStartSubs = () => {
    setStartSubs(true);
  };

  const TABS: Tab[] = [
    {
      id: "create-account",
      text: "Create account",
      content: <CreateAccount callback={goToLogin} />,
      disabled: isUserAuthorized ? true : false,
    },
    {
      id: "login",
      text: "Log in",
      disabled: isUserAuthorized ? true : false,
      content: <Login />,
    },
    {
      id: "checkout",
      text: "Checkout",
      disabled: !isUserAuthorized ? true : false,
      content: <Checkout price={price} sites={sites} onClick={showStartSubs} />,
    },
  ];

  return (
    <section className={cnRoot}>
      <Container className={cnInner}>
        {!isStartSubs && (
          <Tabs className={cnTabsList} tabs={TABS} defaultTab={defaultTab} />
        )}
        {isStartSubs && <FinalStep price={price} sites={sites} />}
      </Container>
    </section>
  );
};
