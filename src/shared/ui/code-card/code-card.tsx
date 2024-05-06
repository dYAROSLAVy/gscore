import { ChangeEvent, FC, useEffect } from "react";
import { useClasses } from "./styles/use-classes";
import { Checkbox } from "../checkbox/checkbox";
import { InputCopy } from "../inputs/input-copy/input-copy";
import { InputSecondary } from "../inputs/input-secondary/input-secondary";
import { ButtonSecondary } from "../buttons/secondary/button-secondary";
import { useActivateLicenseMutation } from "@/entities/codes/api";
import { isFetchBaseQueryError } from "@/shared/redux/utils";
import { UseFormRegister } from "react-hook-form";

export type CodeCardProps = {
  status?: string;
  code?: string;
  domain?: string;
  token?: string;
  id?: number;
  onClick?: () => void;
  onCheckboxChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  register: UseFormRegister<{
    token?: string;
    codesIds?: string[];
    subscribeId?: number;
  }>;
};

export const CodeCard: FC<CodeCardProps> = ({
  status,
  code,
  domain,
  token,
  id,
  register,
  onCheckboxChange,
  disabled,
}) => {
  const {
    cnRoot,
    cnCheck,
    cnLabel,
    cnInputWrap,
    cnStatus,
    cnDomainWrap,
    cnStatusWrap,
    cnButton,
    cnButtonMobile,
    cnCheckboxWrap,
    cnCheckboxInner,
  } = useClasses({ status });

  const [postActivateLicense, { isLoading, error }] =
    useActivateLicenseMutation();

  const registerCodeIds = register("codesIds");

  const checkboxChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    registerCodeIds.onChange(evt);
    onCheckboxChange?.(evt);
  };

  const onActivateClick = () => {
    const data = {
      token,
      code,
    };
    postActivateLicense(data);
  };

  useEffect(() => {
    if (isFetchBaseQueryError(error)) {
      alert(error.data.message);
    }
  }, [error]);

  return (
    <>
      <div className={cnRoot}>
        <div className={cnCheckboxWrap}>
          <div className={cnCheckboxInner}>
            <Checkbox
              className={cnCheck}
              disabled={disabled}
              value={id}
              label={"select a code"}
              {...register("codesIds")}
              onChange={checkboxChangeHandler}
            />
            <div>
              {status === "ACTIVE" && <span className={cnStatus}>Active</span>}
              {status === "INACTIVE" && (
                <span className={cnStatus}>Inactive</span>
              )}
              {status === "HOLD" && <span className={cnStatus}>Hold</span>}
            </div>
          </div>
          {status === "INACTIVE" && (
            <ButtonSecondary
              className={cnButtonMobile}
              onClick={onActivateClick}
              disabled={isLoading}
            >
              Activate
            </ButtonSecondary>
          )}
        </div>

        <div className={cnInputWrap}>
          <span className={cnLabel}>License code</span>
          <InputCopy defaultValue={code} />
        </div>
        <div className={cnDomainWrap}>
          <span className={cnLabel}>Domain</span>
          <InputSecondary
            label={"domain"}
            defaultValue={status === "INACTIVE" ? undefined : domain}
          />
        </div>
        {status === "INACTIVE" && (
          <ButtonSecondary
            className={cnButton}
            onClick={onActivateClick}
            disabled={isLoading}
          >
            Activate
          </ButtonSecondary>
        )}
        <div className={cnStatusWrap}>
          <span className={cnLabel}>Status</span>
          {status === "ACTIVE" && <span className={cnStatus}>Active</span>}
          {status === "INACTIVE" && <span className={cnStatus}>Inactive</span>}
          {status === "HOLD" && <span className={cnStatus}>Hold</span>}
        </div>
      </div>
    </>
  );
};
