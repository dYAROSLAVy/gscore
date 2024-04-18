import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { CloseIcon } from "@/shared/icons/close";
import { useRouter } from "next/router";
import { SubscribeSlider } from "@/widgets/subscribe-slider/subscribe-slider";
import { CodeCard } from "@/shared/ui/code-card/code-card";
import { useGetSubscribesSelfQuery } from "@/api/api";
import { useAppSelector } from "@/store/hooks";
import { getUserToken } from "@/store/user/selectors";

export const Subscriptions = () => {
  const {
    cnRoot,
    cnMainTitle,
    cnError,
    cnTitle,
    cnText,
    cnCloseDecor,
    cnButton,
    cnMainTitleWrap,
    cnSlider,
    cnCodesList,
  } = useClasses();
  const router = useRouter();

  const token = useAppSelector(getUserToken);

  const { data } = useGetSubscribesSelfQuery(token);

  return (
    <section className={cnRoot}>
      <Container>
        <div className={cnMainTitleWrap}>
          <h1 className={cnMainTitle}>My subscriptions</h1>
          {data && <ButtonPrimary children={"Upgrade"} />}
        </div>
        {data && (
          <>
            <div className={cnSlider}>
              <SubscribeSlider subscribes={data} />
            </div>
            <div className={cnCodesList}>
              {data.map(({ codes }, index) => {
                return (
                  <CodeCard
                    code={codes[0].code}
                    status={codes[0].status}
                    key={index}
                  />
                );
              })}
            </div>
          </>
        )}
        {!data && (
          <div className={cnError}>
            <span className={cnCloseDecor}>
              <CloseIcon />
            </span>
            <h2 className={cnTitle}>No active subscriptions</h2>
            <p className={cnText}>
              You can subscribe right now by
              <br />
              clicking on the button below
            </p>
            <ButtonPrimary
              className={cnButton}
              onClick={() => router.push("/")}
              children={"Get Gscore"}
            />
          </div>
        )}
      </Container>
    </section>
  );
};
