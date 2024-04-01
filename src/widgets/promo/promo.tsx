import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { Container } from "@/shared/ui/container/container";
import { PromoCardBase } from "@/shared/ui/promo-card/promo-card-base";

export type PromoProps = {
  className?: string;
};

export const Promo: FC<PromoProps> = () => {
  const { cnRoot, cnTitle, cnList, cnContactWrap, cnLinkTitle, cnLink } =
    useClasses();
  return (
    <section className={cnRoot}>
      <Container>
        <h2 className={cnTitle}>Get started with Gscore today!</h2>
        <ul className={cnList}>
          <li>
            <PromoCardBase
              price={77}
              title={"Single site license"}
              sites={"Single site license"}
            ></PromoCardBase>
          </li>
          <li>
            <PromoCardBase
              price={117}
              title={"3 Site license"}
              sites={"All features for 3 sites"}
              tomato={true}
            ></PromoCardBase>
          </li>
          <li>
            <PromoCardBase
              price={167}
              title={"10 Site license"}
              sites={"All features for 10 sites"}
            ></PromoCardBase>
          </li>
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
