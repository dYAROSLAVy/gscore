import { Container } from "@/shared/ui/container/container";
import { useState } from "react";
import { useClasses } from "./styles/use-classes";
import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { ButtonTabSecondary } from "@/shared/ui/buttons/tab/secondary/button-tab-secondary";

export const Settings = () => {
  const {
    cnRoot,
    cnTitle,
    cnCont,
    cnTabsWrap,
    cnFormTitle,
    cnForm,
    cnFormButton,
  } = useClasses();

  const [showChangePassword, setShowChangePassword] = useState(false);

  const activePasswordTab = () => {
    setShowChangePassword(true);
  };

  const activeInfoTab = () => {
    setShowChangePassword(false);
  };

  return (
    <section className={cnRoot}>
      <Container className={cnCont}>
        <h1 className={cnTitle}>Settings</h1>
        {!showChangePassword && (
          <>
            <div className={cnTabsWrap}>
              <ButtonTabSecondary children="Personal info" isActive={true} />
              <ButtonTabSecondary
                onClick={activePasswordTab}
                children="Change password"
              />
            </div>
            <form className={cnForm}>
              <h3 className={cnFormTitle}>Personal Info</h3>
              <InputPrimary placeholder="Username" />
              <InputPrimary placeholder="Email" />
            </form>
          </>
        )}
        {showChangePassword && (
          <>
            <div className={cnTabsWrap}>
              <ButtonTabSecondary
                children="Personal info"
                onClick={activeInfoTab}
              />
              <ButtonTabSecondary isActive={true} children="Change password" />
            </div>
            <form className={cnForm}>
              <h3 className={cnFormTitle}>Change password</h3>
              <InputPrimary placeholder="Current Password" />
              <InputPrimary placeholder="New Password" />
            </form>
          </>
        )}
        <ButtonPrimary className={cnFormButton} children={"Save"} />
      </Container>
    </section>
  );
};
