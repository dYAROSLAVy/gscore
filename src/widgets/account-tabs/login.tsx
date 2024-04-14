import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import { ButtonTabPrimary } from "@/shared/ui/buttons/tab/primary/button-tab-primary";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostSingInMutation } from "@/api/api";

type FormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const { cnTitle, cnForm, cnTextWrap, cnButton } = useClasses();

  const [postSingIn] = usePostSingInMutation();

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postSingIn(data);
    // callback(data);
  }; 

  return (
    <>
      <ButtonTabPrimary children={"Log in"} isActive={true} />
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Log in</h2>
      </div>
      <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
        <InputPrimary placeholder="Email" {...register("email")} />
        <InputPrimary placeholder="Password" {...register("password")} />
        <ButtonPrimary className={cnButton} children="Log in" />
      </form>
    </>
  );
};
