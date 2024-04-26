import { useClasses } from "./styles/use-classes";
import { InputPrimary } from "@/shared/ui/inputs/input-primary/input-primary";
import { ButtonPrimary } from "@/shared/ui/buttons/primary/button-primary";
import { usePatchUpdatePersonalDataMutation } from "@/entities/user/api/api";
import { useAppSelector } from "@/shared/redux/hooks";
import { getUserToken } from "@/entities/user/model/selectors";
import { UpdateUserSchema } from "@/entities/types";
import { SubmitHandler, useForm } from "react-hook-form";

export const Personal = () => {
  const { cnForm, cnTitle, cnButton } = useClasses();
  const [patchUpdatePersonalData] = usePatchUpdatePersonalDataMutation();
  const token = useAppSelector(getUserToken);
  const { register, handleSubmit, reset } = useForm<UpdateUserSchema>();

  const onSubmit: SubmitHandler<UpdateUserSchema> = (data) => {
    data.token = token;

    if (data.email?.length === 0) {
      delete data.email;
    }

    if (data.username?.length === 0) {
      delete data.username;
    }

    patchUpdatePersonalData(data);

    reset();
  };

  return (
    <form className={cnForm} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={cnTitle}>Personal Info</h3>
      <InputPrimary placeholder="Username" {...register("username")} />
      <InputPrimary placeholder="Email" {...register("email")} />
      <ButtonPrimary className={cnButton}>Save</ButtonPrimary>
    </form>
  );
};
