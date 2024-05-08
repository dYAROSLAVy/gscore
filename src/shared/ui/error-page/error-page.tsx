import { CloseIcon } from "@/shared/icons/close";
import { Container } from "../container/container";
import { ButtonPrimary } from "../buttons/primary/button-primary";
import { useRouter } from "next/router";
import { useClasses } from "./styles/use-classes";

export const ErrorPage = () => {
  const { cnRoot, cnText, cnTitle, cnButton, cnCloseDecor } = useClasses();

  const router = useRouter();

  return (
    <Container>
      <div className={cnRoot}>
        <span className={cnCloseDecor}>
          <CloseIcon />
        </span>
        <h2 className={cnTitle}>No active subscriptions</h2>
        <p className={cnText}>
          You can subscribe right now by
          <br />
          clicking on the button below
        </p>
        <ButtonPrimary className={cnButton} onClick={() => router.push("/")}>
          Get Gscore
        </ButtonPrimary>
      </div>
    </Container>
  );
};
