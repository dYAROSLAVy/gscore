import { Container } from "@/shared/ui/container/container";
import { useClasses } from "@/page-components/subscriptions/ui/styles/use-classes";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useRouter } from "next/router";
import { useAppSelector } from "@/shared/redux/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import {
  getSubscribesSlideIndex,
  SubscribeSlider,
  useGetSubscribesSelfQuery,
} from "@/entities/subscribes";
import {
  CodeCard,
  CodeManagePutParams,
  useCodeManageMutation,
} from "@/entities/codes";
import { getUserToken } from "@/entities/user";
import { ErrorPage } from "@/shared/ui/error-page/error-page";

export const Subscriptions = () => {
  const {
    cnRoot,
    cnMainTitle,
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

  const subscribeIndex = useAppSelector(getSubscribesSlideIndex);

  const [codeManage, { isLoading }] = useCodeManageMutation();

  const { register, handleSubmit, reset, getValues, control } = useForm<{
    codesIds?: string[];
  }>();

  const createClickHandler = (index: number, id: number) => () => {
    setCard(index);
    setActiveSlide(id);
    reset();
    setHasAvailableCheckboxes(true);
  };

  const { codesIds } = useWatch({ control });

  const onSubmit: SubmitHandler<{
    codesIds?: string[];
  }> = async (data) => {
    const params: CodeManagePutParams = {
      token: token,
      subscribeId: Number(subscribeIndex),
      codesIds: data.codesIds?.length
        ? data.codesIds?.map((id: string) => Number(id))
        : undefined,
    };
    try {
      await codeManage(params).unwrap();
      reset();
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        alert(error.data.message);
      }
    }
  };

  useEffect(() => {
    if (isFetchBaseQueryError(getSubscribesSelfError)) {
      alert(getSubscribesSelfError.data.message);
    }
  }, [getSubscribesSelfError]);

  const onCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const licenseCodeLimit = data?.[card].product.sitesCount ?? 0;

    const checkedLicenses = getValues("codesIds");

    const shouldDisableOtherCheckboxes =
      checkedLicenses && checkedLicenses.length >= licenseCodeLimit;

    setHasAvailableCheckboxes(!shouldDisableOtherCheckboxes);
  };

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
                  <ButtonPrimary
                    type="submit"
                    disabled={!codesIds?.length || isLoading}
                  >
                    Сonfirm
                  </ButtonPrimary>
                </div>
              )}
            </form>
          </Container>
        </>
      )}
      {!data?.[card] && <ErrorPage />}
    </section>
  );
};
