import { wrapper } from "@/app/store";
import { Promo } from "@/page-components/promo";
import { getProducts, productThunk } from "@/entities/products";
import { Layout } from "@/widgets/layout";
import {
  getMeData,
  getUserRunningQueriesThunk,
  setToken,
} from "@/entities/user";

export default function Home() {
  return (
    <Layout headTitle="Gscore" title="Main page Gscore">
      <Promo />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const token = context.req.cookies["user-token"];

    store.dispatch(getProducts.initiate());

    store.dispatch(setToken(token ?? ``));
    store.dispatch(getMeData(token ?? ``));

    await Promise.all(store.dispatch(productThunk()));
    await Promise.all(store.dispatch(getUserRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
