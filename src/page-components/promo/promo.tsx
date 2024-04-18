import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { Container } from "@/shared/ui/container/container";
import { PromoCardBase } from "@/shared/ui/promo-card/promo-card";
import { useRouter } from "next/router";
import { useGetProductsQuery } from "@/api/api";
import Link from "next/link";

export type PromoProps = {
  className?: string;
};

export const Promo: FC<PromoProps> = () => {
  const { cnRoot, cnTitle, cnList, cnContactWrap, cnLinkTitle, cnLink } =
    useClasses();
  const router = useRouter();

  const { data } = useGetProductsQuery();

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
                onClick={() => router.push("/account")}
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
