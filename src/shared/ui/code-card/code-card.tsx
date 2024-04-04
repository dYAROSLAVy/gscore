import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { Checkbox } from "../checkbox/checkbox";
import { InputCopy } from "../inputs/input-copy/input-copy";
import { InputSecondary } from "../inputs/input-secondary/input-secondary";
import { ButtonSecondary } from "../buttons/secondary/button-secondary";

export type CodeCardProps = {
  isInactive?: boolean;
  isHold?: boolean;
};

export const CodeCard: FC<CodeCardProps> = ({ isInactive, isHold }) => {
  const {
    cnRoot,
    cnCheck,
    cnLabel,
    cnInputWrap,
    cnStatus,
    cnDomainWrap,
    cnStatusWrap,
    cnButton,
  } = useClasses({ isInactive, isHold });
  return (
    <>
      <div className={cnRoot}>
        {!isHold && <Checkbox className={cnCheck} disabled={true} />}
        {isHold && <Checkbox className={cnCheck} />}
        <div className={cnInputWrap}>
          <span className={cnLabel}>License code</span>
          <InputCopy />
        </div>
        <div className={cnDomainWrap}>
          <span className={cnLabel}>Domain</span>
          <InputSecondary />
        </div>
        {isInactive && (
          <ButtonSecondary className={cnButton} children="Activate" />
        )}
        <div className={cnStatusWrap}>
          <span className={cnLabel}>Status</span>
          {!isInactive && !isHold && <span className={cnStatus}>Active</span>}
          {isInactive && <span className={cnStatus}>Inactive</span>}
          {isHold && <span className={cnStatus}>Hold</span>}
        </div>
      </div>
    </>
  );
};
