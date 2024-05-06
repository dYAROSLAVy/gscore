import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "./styles/use-classes";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useSignUpMutation } from "@/entities/user/api/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { isFetchBaseQueryError } from "@/shared/redux/utils";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export const CreateAccount = ({ callback }: { callback: () => void }) => {
  const { cnTitle, cnForm, cnTextWrap, cnButton, cnText, cnLinkWrap } =
    useClasses();

  const [postSingUp, { isSuccess, error, isLoading }] = useSignUpMutation();

  const { query: {id, name, price}  } = useRouter();

  const { register, handleSubmit } = useForm<FormValues>();

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
        <InputPrimary
          placeholder="Password"
          {...register("password")}
          type="password"
        />
        <ButtonPrimary className={cnButton} disabled={isLoading}>
          Send password
        </ButtonPrimary>
      </form>
      <p className={cnLinkWrap}>
        <span>Have an account?</span>
        <Link
          onClick={callback}
          href={`account?id=${id}&price=${price}&name=${name}`}
        >
          Go to the next step
        </Link>
      </p>
    </>
  );
};
