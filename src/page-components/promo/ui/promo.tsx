import { FC, useEffect } from "react";
import { useClasses } from "@/page-components/promo/ui/styles/use-classes";
import { Container } from "@/shared/ui/container/container";
import { useRouter } from "next/router";
import Link from "next/link";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { PromoCardBase, useGetProductsQuery } from "@/entities/products";

export type PromoProps = {
  className?: string;
};

export const Promo: FC<PromoProps> = () => {
  const { cnRoot, cnTitle, cnList, cnContactWrap, cnLinkTitle, cnLink } =
    useClasses();
  const router = useRouter();

  const { subscribeIndex } = router.query;

  const { data, error } = useGetProductsQuery();

  useEffect(() => {
    if (isFetchBaseQueryError(error)) {
      alert(error.data.message);
    }
  }, [error]);

  let isSubscribeIndex = subscribeIndex ? true : false;

  return (
    <section className={cnRoot}>
      <Container>
        <h2 className={cnTitle}>Get started with Gscore today!</h2>
        <div className={cnList}>
          {data?.map(({ sitesCount, prices, id }, index) => {
            return (
              <PromoCardBase
                key={index}
                id={id}
                price={prices[0].price}
                tomato={id === 2}
                sitesCount={sitesCount}
                onClick={() =>
                  router.push(
                    `account?id=${id}&price=${prices[0].price}&name=${sitesCount}`
                  )
                }
                subscribeIndex={subscribeIndex}
                isSubscribeIndex={isSubscribeIndex}
              />
            );
          })}
        </div>
        <div className={cnContactWrap}>
          <span className={cnLinkTitle}>Have more than 10 sites?</span>
          <Link className={cnLink} href="/">
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
};
