import { Wrapper } from "@/shared/ui/wrapper/wrapper";
import { Footer } from "@/widgets/footer";
import Head from "next/head";
import { wrapper } from "@/app/store";
import { Header } from "@/widgets/header";
import { Main } from "@/widgets/main";
import { Promo } from "@/page-components/promo";
import { getProducts, productThunk } from "@/entities/products";

export default function Home() {
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
          <h1 className={"visually-hidden"}>Main page Gscore</h1>
          <Promo />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getProducts.initiate());

  await Promise.all(store.dispatch(productThunk()));

  return {
    props: {},
  };
});
