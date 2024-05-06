import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { CloseIcon } from "@/shared/icons/close";
import { useRouter } from "next/router";
import { SubscribeSlider } from "@/widgets/subscribe-slider/subscribe-slider";
import { CodeCard } from "@/shared/ui/code-card/code-card";
import { useAppSelector } from "@/shared/redux/hooks";
import { getUserToken } from "@/entities/user/model/selectors";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetSubscribesSelfQuery } from "@/entities/subscribes/api/api";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { getSubscribesSlideIndex } from "@/entities/subscribes/model/selectors";
import {
  CodeManagePutParams,
  useCodeManageMutation,
} from "@/entities/codes/api";
import { SubmitHandler, useForm } from "react-hook-form";

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
    cnConfirmWrap,
    cnConfirmText,
    cnConfirmTextMob,
  } = useClasses();
  const router = useRouter();

  const token = useAppSelector(getUserToken);

  const { data, error: getSubscribesSelfError } =
    useGetSubscribesSelfQuery(token);

  const [card, setCard] = useState(0);

  const [activeSlide, setActiveSlide] = useState(data?.[card]?.id ?? 0);

  const [hasAvailableCheckboxes, setHasAvailableCheckboxes] = useState(true);

  const createClickHandler = (index: number, id: number) => () => {
    setCard(index);
    setActiveSlide(id);
  };

  const subscribeIndex = useAppSelector(getSubscribesSlideIndex);

  const [codeManage, { error: codeManageError }] = useCodeManageMutation();

  const { register, handleSubmit, reset, getValues } = useForm<{
    token?: string;
    codesIds?: string[];
    subscribeId?: number;
  }>();

  const onSubmit: SubmitHandler<{
    token?: string;
    codesIds?: string[];
    subscribeId?: number;
  }> = (data) => {
    const params: CodeManagePutParams = {
      token: token,
      subscribeId: Number(subscribeIndex),
      codesIds: data.codesIds?.length
        ? data.codesIds?.map((id: string) => Number(id))
        : undefined,
    };
    codeManage(params);
    reset();
  };

  useEffect(() => {
    if (isFetchBaseQueryError(getSubscribesSelfError)) {
      alert(getSubscribesSelfError.data.message);
    }
  }, [getSubscribesSelfError]);

  useEffect(() => {
    if (isFetchBaseQueryError(codeManageError)) {
      alert(codeManageError.data.message);
    }
  }, [codeManageError]);

  const onCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const licenseCodeLimit = data?.[card].product.sitesCount ?? 0;

    const checkedLicenses = getValues("codesIds");

    const shouldDisableOtherCheckboxes =
      checkedLicenses && checkedLicenses.length >= licenseCodeLimit;

    setHasAvailableCheckboxes(!shouldDisableOtherCheckboxes);
  };

  const codesIds = getValues("codesIds");

  return (
    <section className={cnRoot}>
      <Container>
        <div className={cnMainTitleWrap}>
          <h1 className={cnMainTitle}>My subscriptions</h1>
          {data?.[card] && (
            <ButtonPrimary
              onClick={() => router.push(`/?subscribeIndex=${subscribeIndex}`)}
            >
              Upgrade
            </ButtonPrimary>
          )}
        </div>
      </Container>
      {data?.[card] && (
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
            {data?.[card]?.codes[0].status === "HOLD" && (
              <span className={cnConfirmTextMob}>
                Select the domains you want to keep
              </span>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={cnCodesList}>
                {data[card]?.codes
                  .slice()
                  .reverse()
                  .map(({ code, status, origin, id }) => {
                    const disabled =
                      status !== "HOLD" ||
                      (!hasAvailableCheckboxes &&
                        !codesIds?.includes(String(id)));

                    return (
                      <CodeCard
                        code={code}
                        status={status}
                        key={id}
                        id={id}
                        domain={origin}
                        token={token}
                        register={register}
                        onCheckboxChange={onCheckboxChange}
                        disabled={disabled}
                      />
                    );
                  })}
              </div>
              {data?.[card]?.codes[0].status === "HOLD" && (
                <div className={cnConfirmWrap}>
                  <span className={cnConfirmText}>
                    Select the domains you want to keep
                  </span>
                  <ButtonPrimary>Сonfirm</ButtonPrimary>
                </div>
              )}
            </form>
          </Container>
        </>
      )}
      {!data?.[card] && (
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
