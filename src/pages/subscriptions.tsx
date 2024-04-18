import { Wrapper } from "@/shared/ui/wrapper/wrapper";
import { Footer } from "@/widgets/footer/footer";
import { Header } from "@/widgets/header/header";
import { Main } from "@/widgets/main/main";
import { Subscriptions } from "@/page-components/subscriptions/subscriptions";
import Head from "next/head";
import { useAppSelector } from "@/store/hooks";
import { getIsUserAuthorized, getUserName } from "@/store/user/selectors";

export default function SubscriptionsPage() {
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const userName = useAppSelector(getUserName);
  return (
    <>
      <Head>
        <title>Gscore</title>
        <meta
          name="description"
          content="Project that provides an opportunity to buy a subscription with codes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header
          isLogin={isUserAuthorized}
          userName={userName}
          isSubscriptions
        />
        <Main>
          <Subscriptions />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}
