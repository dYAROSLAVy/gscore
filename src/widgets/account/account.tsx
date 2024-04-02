import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { Container } from "@/shared/ui/container/container";
import { useClasses } from "./styles/use-classes";
import { ButtonTab } from "@/shared/ui/buttons/tab/button-tab";

export const Account = () => {
  const { cnRoot, cnInner, cnTabsList, cnTitle, cnText, cnForm, cnLinkWrap } =
    useClasses();

  return (
    <section className={cnRoot}>
      <Container className={cnInner}>
        <ul className={cnTabsList}>
          <li>
            <ButtonTab children={"Create account"} isActive={true} />
          </li>
          <li>
            <ButtonTab children={"Login"} />
          </li>
          <li>
            <ButtonTab children={"Checkout"} />
          </li>
        </ul>

        <h2 className={cnTitle}>Create account</h2>
        <p className={cnText}>
          You need to enter your name and email. We will send you a temporary
          password by email
        </p>
        <form className={cnForm}>
          <InputPrimary placeholder="UserName" />
          <InputPrimary placeholder="Email" />
          <InputPrimary placeholder="Password" />
          <ButtonPrimary children="Send password" />
        </form>
        <p className={cnLinkWrap}>
          <span>Have an account?</span>
          <a href="/">Go to the next step</a>
        </p>
      </Container>
    </section>
  );
};
