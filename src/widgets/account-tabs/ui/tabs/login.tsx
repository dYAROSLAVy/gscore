import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "../styles/use-classes";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { FormUser, useSingInMutation } from "@/entities/user";

export const Login = ({ callback }: { callback: () => void }) => {
  const { cnTitle, cnForm, cnTextWrap, cnButton } = useClasses();

  const [postSingIn, { isLoading, isSuccess, error }] = useSingInMutation();

  const { register, handleSubmit } = useForm<FormUser>();

  useEffect(() => {
    if (isSuccess) {
      callback();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFetchBaseQueryError(error)) {
      alert(error.data.message);
    }
  }, [error]);

  const onSubmit: SubmitHandler<FormUser> = (data) => {
    postSingIn(data);
  };

  return (
    <>
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Log in</h2>
      </div>
      <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
        <InputPrimary placeholder="Email" {...register("email")} />
        <InputPrimary
          placeholder="Password"
          {...register("password")}
          type="password"
        />
        <ButtonPrimary className={cnButton} disabled={isLoading}>
          Log in
        </ButtonPrimary>
      </form>
    </>
  );
};
