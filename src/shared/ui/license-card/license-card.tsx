import { FC } from "react";
import { useClasses } from "./styles/use-classes";
import { ButtonSecondary } from "../buttons/secondary/button-secondary";

export type LicenseCardProps = {
  price?: string;
  date: string;
  type?: string;
};

export const LicenseCard: FC<LicenseCardProps> = ({ price, date, type }) => {
  const {
    cnRoot,
    cnTopInner,
    cnBottomInner,
    cnInfoWrap,
    cnInfoInner,
    cnLicenseDate,
    cnStatus,
    cnButton,
  } = useClasses();

  const numberDate = Number(date) * 1000;

  const validUntil = new Intl.DateTimeFormat("ru").format(numberDate);

  return (
    <div className={cnRoot}>
      <div className={cnTopInner}>
        <span>Gscore</span>
        <span className={cnStatus}>Active</span>
      </div>
      <div className={cnBottomInner}>
        <div className={cnInfoWrap}>
          <p className={cnInfoInner}>
            <span>
              {type === "One cite" ? "Single site license" : `${type} license`}
            </span>
            <span className={cnLicenseDate}>valid until {validUntil}</span>
          </p>
          <span>${price}</span>
        </div>
        <ButtonSecondary className={cnButton}>View</ButtonSecondary>
      </div>
    </div>
  );
};
