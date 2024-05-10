import { useClasses } from "./styles/use-classes";
import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { useAppSelector } from "@/shared/redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import {
  getUserToken,
  UpdateUserSchema,
  useUpdatePersonalDataMutation,
} from "@/entities/user";

export const Personal = () => {
  const { cnForm, cnTitle, cnButton } = useClasses();
  const [patchUpdatePersonalData, { isLoading }] =
    useUpdatePersonalDataMutation();
  const token = useAppSelector(getUserToken);

  const { register, handleSubmit, reset } = useForm<UpdateUserSchema>();

  const onSubmit: SubmitHandler<UpdateUserSchema> = async (data) => {
    try {
      data.token = token;

      if (data.email?.length === 0) {
        delete data.email;
      }

      if (data.username?.length === 0) {
        delete data.username;
      }

      await patchUpdatePersonalData(data).unwrap();
      reset();

      alert("changes saved");
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        alert(error.data.message);
      }
    }
  };

  return (
    <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={cnTitle}>Personal Info</h2>
      <InputPrimary placeholder="Username" {...register("username")} />
      <InputPrimary placeholder="Email" {...register("email")} />
      <ButtonPrimary className={cnButton} disabled={isLoading}>
        Save
      </ButtonPrimary>
    </form>
  );
};
