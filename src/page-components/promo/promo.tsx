import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { Container } from "@/shared/ui/container/container";
import { PromoCardBase } from "@/shared/ui/promo-card/promo-card";
import { useRouter } from "next/router";
import { useGetProductsQuery } from "@/api/api";

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
        <ul className={cnList}>
          {data?.map(({ sitesCount, prices }, index) => (
            <PromoCardBase
              key={index}
              price={prices[0].price}
              sitesCount={sitesCount}
              onClick={() => router.push("/account")}
            />
          ))}
        </ul>
        <div className={cnContactWrap}>
          <span className={cnLinkTitle}>Have more than 10 sites?</span>
          <a className={cnLink} href="/">
            Contact us
          </a>
        </div>
      </Container>
    </section>
  );
};
