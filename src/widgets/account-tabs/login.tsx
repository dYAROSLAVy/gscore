import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostSingInMutation } from "@/api/api";
import { FormUser } from "@/api/types";

export const Login = () => {
  const { cnTitle, cnForm, cnTextWrap, cnButton } = useClasses();

  const [postSingIn] = usePostSingInMutation();

  const { register, handleSubmit } = useForm<FormUser>();

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
        <ButtonPrimary className={cnButton} children="Log in" />
      </form>
    </>
  );
};
