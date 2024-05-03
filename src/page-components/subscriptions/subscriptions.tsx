import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { CloseIcon } from "@/shared/icons/close";
import { useRouter } from "next/router";
import { SubscribeSlider } from "@/widgets/subscribe-slider/subscribe-slider";
import { CodeCard } from "@/shared/ui/code-card/code-card";
import { useAppSelector } from "@/shared/redux/hooks";
import { getUserToken } from "@/entities/user/model/selectors";
import { useEffect, useState } from "react";
import { useGetSubscribesSelfQuery } from "@/entities/subscribes/api/api";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { getSubscribesSlideIndex } from "@/entities/subscribes/model/selectors";

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
    cnSliderCont,
  } = useClasses();
  const router = useRouter();

  const token = useAppSelector(getUserToken);

  const { data, error } = useGetSubscribesSelfQuery(token);

  const [card, setCard] = useState(0);

  const [activeSlide, setActiveSlide] = useState(data?.[card].id ?? 0);

  const createClickHandler = (index: number, id: number) => () => {
    setCard(index);
    setActiveSlide(id);
  };

  const subscribeIndex = useAppSelector(getSubscribesSlideIndex);

  useEffect(() => {
    if (isFetchBaseQueryError(error)) {
      alert(error.data.message);
    }
  }, [error]);

  // const onActivateClick = () => {
  //   const slideIndex = data?.findIndex(item => item.id === activeSlide);

  //   console.log({slideIndex})
  //   if (typeof slideIndex !== 'undefined' && slideIndex >= 0) {
  //     setCard(slideIndex);
  //   }
  // }

  return (
    <section className={cnRoot}>
      <Container>
        <div className={cnMainTitleWrap}>
          <h1 className={cnMainTitle}>My subscriptions</h1>
          {data && (
            <ButtonPrimary
              onClick={() => router.push(`/?subscribeIndex=${subscribeIndex}`)}
            >
              Upgrade
            </ButtonPrimary>
          )}
        </div>
      </Container>
      {data && (
        <>
          <Container className={cnSliderCont}>
            <div className={cnSlider}>
              <SubscribeSlider
                subscribes={data}
                createClickHandler={createClickHandler}
              />
            </div>
          </Container>
          <Container>
            <div className={cnCodesList}>
              {data[card].codes
                .slice(0)
                .reverse()
                .map(({ code, status, origin, id }) => {
                  return (
                    <CodeCard
                      code={code}
                      status={status}
                      key={id}
                      domain={origin}
                      token={token}
                      // onClick={onActivateClick}
                    />
                  );
                })}
            </div>
          </Container>
        </>
      )}
      {!data && (
        <Container>
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
            >
              Get Gscore
            </ButtonPrimary>
          </div>
        </Container>
      )}
    </section>
  );
};
