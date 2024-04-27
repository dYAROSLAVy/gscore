import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { Checkbox } from "../checkbox/checkbox";
import { InputCopy } from "../inputs/input-copy/input-copy";
import { InputSecondary } from "../inputs/input-secondary/input-secondary";
import { ButtonSecondary } from "../buttons/secondary/button-secondary";
import { useActivateLicenseMutation } from "@/entities/codes/api";

export type CodeCardProps = {
  status?: string;
  isHold?: boolean;
  code?: string;
  domain?: string;
  token?: string;
};

export const CodeCard: FC<CodeCardProps> = ({
  status,
  isHold,
  code,
  domain,
  token,
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
  } = useClasses({ status, isHold });

  const [postActivateLicense] = useActivateLicenseMutation();

  const onActivateClick = () => {
    const data = {
      token,
      code,
    };
    postActivateLicense(data);
  };

  return (
    <>
      <div className={cnRoot}>
        {!isHold && <Checkbox className={cnCheck} disabled={true} />}
        {isHold && <Checkbox className={cnCheck} />}
        <div className={cnInputWrap}>
          <span className={cnLabel}>License code</span>
          <InputCopy defaultValue={code} />
        </div>
        <div className={cnDomainWrap}>
          <span className={cnLabel}>Domain</span>
          {status === "ACTIVE" && !isHold && (
            <InputSecondary defaultValue={domain} />
          )}
          {status === "INACTIVE" && <InputSecondary />}
        </div>
        {status === "INACTIVE" && (
          <ButtonSecondary className={cnButton} onClick={onActivateClick}>
            Activate
          </ButtonSecondary>
        )}
        <div className={cnStatusWrap}>
          <span className={cnLabel}>Status</span>
          {status === "ACTIVE" && !isHold && (
            <span className={cnStatus}>Active</span>
          )}
          {status !== "ACTIVE" && <span className={cnStatus}>Inactive</span>}
          {isHold && <span className={cnStatus}>Hold</span>}
        </div>
      </div>
    </>
  );
};
