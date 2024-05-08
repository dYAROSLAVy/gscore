import { wrapper } from "@/app/store";
import { Subscriptions } from "@/page-components/subscriptions";
import { getSubscribesSelf, subscribesThunk } from "@/entities/subscribes";
import {
  getMeData,
  getUserRunningQueriesThunk,
  setToken,
} from "@/entities/user";
import { Layout } from "@/widgets/layout";

export default function SubscriptionsPage() {
  return (
    <Layout headTitle="Subscriptions">
      <Subscriptions />
    </Layout>
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
