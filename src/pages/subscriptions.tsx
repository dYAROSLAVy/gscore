import { Wrapper } from "@/shared/ui/wrapper/wrapper";
import { Footer } from "@/widgets/footer";
import Head from "next/head";
import { wrapper } from "@/app/store";
import { Header } from "@/widgets/header";
import { Main } from "@/widgets/main";
import { Subscriptions } from "@/page-components/subscriptions";
import { getSubscribesSelf, subscribesThunk } from "@/entities/subscribes";
import {
  getMeData,
  getUserRunningQueriesThunk,
  setToken,
} from "@/entities/user";

export default function SubscriptionsPage() {
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
        <Header />
        <Main>
          <Subscriptions />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const token = context.req.cookies["user-token"];

    store.dispatch(getSubscribesSelf.initiate(token));
    store.dispatch(setToken(token ?? ``));
    store.dispatch(getMeData(token ?? ``));

    await Promise.all(store.dispatch(subscribesThunk()));
    await Promise.all(store.dispatch(getUserRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
