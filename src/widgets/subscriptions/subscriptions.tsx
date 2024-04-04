import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { CloseIcon } from "@/shared/icons/close";
import { useRouter } from "next/router";
import { FC } from "react";
import { CodeCard } from "@/shared/ui/code-card/code-card";
export type SubscriptionsProps = {
  isSubscriptions?: boolean;
};

export const Subscriptions: FC<SubscriptionsProps> = ({ isSubscriptions }) => {
  const {
    cnRoot,
    cnMainTitle,
    cnError,
    cnTitle,
    cnText,
    cnCloseDecor,
    cnButton,
    cnMainTitleWrap,
  } = useClasses();
  const router = useRouter();

  return (
    <section className={cnRoot}>
      <Container>
        <div className={cnMainTitleWrap}>
          <h1 className={cnMainTitle}>My subscriptions</h1>
          {isSubscriptions && <ButtonPrimary children={"Upgrade"} />}
        </div>
        {isSubscriptions && <div className=""></div>}
        {!isSubscriptions && (
          <>
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
          </>
        )}
      </Container>
    </section>
  );
};
