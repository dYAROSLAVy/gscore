import { useClasses } from "./styles/use-classes";
import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@/shared/redux/hooks";
import { useEffect } from "react";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import {
  getUserToken,
  NewPassword,
  NewPasswordSchema,
  useUpdatePasswordMutation,
} from "@/entities/user";

export const Password = () => {
  const { cnForm, cnTitle, cnButton } = useClasses();

  const token = useAppSelector(getUserToken);

  const [patchUpdatePassword, { isLoading, error, isSuccess }] =
    useUpdatePasswordMutation();

  const { register, handleSubmit, reset } = useForm<NewPassword>();

  const onSubmit: SubmitHandler<NewPasswordSchema> = (data) => {
    data.token = token;
    patchUpdatePassword(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      alert("password changed");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFetchBaseQueryError(error)) {
      alert(error.data.message);
    }
  }, [error]);

  return (
    <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={cnTitle}>Change password</h2>
      <InputPrimary
        placeholder="Current Password"
        type="password"
        required
        {...register("currentPassword")}
      />
      <InputPrimary
        placeholder="New Password"
        type="password"
        required
        {...register("newPassword")}
      />
      <ButtonPrimary className={cnButton} disabled={isLoading}>
        Save
      </ButtonPrimary>
    </form>
  );
};
