import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useClasses } from "../styles/use-classes";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { FormUser, useSingInMutation } from "@/entities/user";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { JSONSchemaType } from "ajv";

export const Login = ({ callback }: { callback: () => void }) => {
  const { cnTitle, cnForm, cnTextWrap, cnButton } = useClasses();

  const [postSingIn, { isLoading, isSuccess, error }] = useSingInMutation();

  const schema: JSONSchemaType<FormUser> = {
    type: "object",
    properties: {
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
    required: ["password", "email"],
    additionalProperties: false,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUser>({
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

  const onSubmit: SubmitHandler<FormUser> = (data) => {
    postSingIn(data);
  };

  return (
    <>
      <div className={cnTextWrap}>
        <h2 className={cnTitle}>Log in</h2>
      </div>
      <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
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
          Log in
        </ButtonPrimary>
      </form>
    </>
  );
};
