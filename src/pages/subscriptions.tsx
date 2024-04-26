import { Wrapper } from "@/shared/ui/wrapper/wrapper";
import { Footer } from "@/widgets/footer/footer";
import { Header } from "@/widgets/header/header";
import { Main } from "@/widgets/main/main";
import { Subscriptions } from "@/page-components/subscriptions/subscriptions";
import Head from "next/head";

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
        <Header isSubscriptions />
        <Main>
          <Subscriptions />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}
