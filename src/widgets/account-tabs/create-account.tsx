import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostSingUpMutation } from "@/api/api";
import Link from "next/link";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export const CreateAccount = ({ callback }: { callback: () => void }) => {
  const { cnTitle, cnForm, cnTextWrap, cnButton, cnText, cnLinkWrap } =
    useClasses();

  const [postSingUp] = usePostSingUpMutation();

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postSingUp(data);
  };

  return (
    <>
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Create account</h2>
        <p className={cnText}>
          You need to enter your name and email. We will send you a temporary
          password by email
        </p>
      </div>
      <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
        <InputPrimary placeholder="UserName" {...register("username")} />
        <InputPrimary placeholder="Email" {...register("email")} />
        <InputPrimary placeholder="Password" {...register("password")} />
        <ButtonPrimary className={cnButton}>Send password</ButtonPrimary>
      </form>
      <p className={cnLinkWrap}>
        <span>Have an account?</span>
        <Link onClick={callback} href={""}>
          Go to the next step
        </Link>
      </p>
    </>
  );
};
