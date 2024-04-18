import { useClasses } from "./styles/use-classes";
import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewPassword, NewPasswordSchema } from "@/api/types";
import { usePatchUpdatePasswordMutation } from "@/api/api";
import { useAppSelector } from "@/store/hooks";
import { getUserToken } from "@/store/user/selectors";

export const Password = () => {
  const { cnForm, cnTitle, cnButton } = useClasses();

  const token = useAppSelector(getUserToken);

  const [patchUpdatePassword] = usePatchUpdatePasswordMutation();

  const { register, handleSubmit, reset } = useForm<NewPassword>();

  const onSubmit: SubmitHandler<NewPasswordSchema> = (data) => {
    data.token = token;
    patchUpdatePassword(data);
    reset();
  };

  return (
    <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={cnTitle}>Change password</h3>
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
      <ButtonPrimary className={cnButton}>Save</ButtonPrimary>
    </form>
  );
};
