import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { FC } from "react";
import { Login } from "@/widgets/account-tabs/login";
import { CreateAccount } from "@/widgets/account-tabs/create-account";
import { Checkout } from "@/widgets/account-tabs/checkout";
import { FinalStep } from "@/widgets/account-tabs/final-step";

export type AccountProps = {
  price: number;
  sites: string;
};

export const Account: FC<AccountProps> = ({ price, sites }) => {
  const {
    cnRoot,
    cnInner,
  } = useClasses();
  return (
    <section className={cnRoot}>
      <Container className={cnInner}>
        <CreateAccount />
        {/* <Login />
        <Checkout price={price} sites={sites} />
        <FinalStep price={price} sites={sites} /> */}
      </Container>
    </section>
  );
};
