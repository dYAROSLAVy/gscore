import { useClasses } from "./styles/use-classes";
import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@/shared/redux/hooks";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import {
  getUserToken,
  NewPassword,
  NewPasswordSchema,
  useUpdatePasswordMutation,
} from "@/entities/user";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { JSONSchemaType } from "ajv";

const schema: JSONSchemaType<NewPassword> = {
  type: "object",
  properties: {
    currentPassword: {
      type: "string",
      minLength: 6,
      errorMessage: { minLength: "password field min-length is 6" },
    },
    newPassword: {
      type: "string",
      minLength: 6,
      errorMessage: {
        minLength: "password field min-length is 6",
      },
    },
  },
  required: ["currentPassword", "newPassword"],
  additionalProperties: false,
};

export const Password = () => {
  const { cnForm, cnTitle, cnButton } = useClasses();

  const token = useAppSelector(getUserToken);

  const [patchUpdatePassword, { isLoading }] = useUpdatePasswordMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPassword>({
    resolver: ajvResolver(schema),
  });

  const onSubmit: SubmitHandler<NewPasswordSchema> = async (data) => {
    try {
      data.token = token;
      await patchUpdatePassword(data).unwrap();
      reset();
      alert("password changed");
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        alert(error.data.message);
      }
    }
  };

  return (
    <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={cnTitle}>Change password</h2>
      <InputPrimary
        placeholder="Current Password"
        type="password"
        {...register("currentPassword")}
        error={errors.currentPassword?.message}
      />
      <InputPrimary
        placeholder="New Password"
        type="password"
        {...register("newPassword")}
        error={errors.newPassword?.message}
      />
      <ButtonPrimary className={cnButton} disabled={isLoading}>
        Save
      </ButtonPrimary>
    </form>
  );
};
