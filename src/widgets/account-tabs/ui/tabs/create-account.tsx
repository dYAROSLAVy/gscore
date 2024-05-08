import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "../styles/use-classes";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { useSignUpMutation } from "@/entities/user";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { JSONSchemaType } from "ajv";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const schema: JSONSchemaType<FormValues> = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 1,
      errorMessage: { minLength: "username field is required" },
    },
    email: {
      type: "string",
      minLength: 3,
      errorMessage: {
        minLength: "email field is required and must be an email type",
      },
    },
    password: {
      type: "string",
      minLength: 6,
      errorMessage: { minLength: "password field min-length is 6" },
    },
  },
  required: ["username", "password", "email"],
  additionalProperties: false,
};

export const CreateAccount = ({ callback }: { callback: () => void }) => {
  const { cnTitle, cnForm, cnTextWrap, cnButton, cnText, cnLinkWrap } =
    useClasses();

  const [postSingUp, { isSuccess, error, isLoading }] = useSignUpMutation();

  const {
    query: { id, name, price },
  } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: ajvResolver(schema),
  });

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
        <InputPrimary
          placeholder="UserName"
          {...register("username")}
          error={errors.username?.message}
        />
        <InputPrimary
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <InputPrimary
          placeholder="Password"
          {...register("password")}
          type="password"
          error={errors.password?.message}
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
