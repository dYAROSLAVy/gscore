import { CheckIcon } from "@/shared/icons/check";
import { ButtonSecondary } from "../buttons/secondary/button-secondary";
import { useClasses } from "./styles/use-classes";
import { FC } from "react";

export type PromoCardProps = {
  className?: string;
  id: number;
  sitesCount: number;
  price?: string;
  tomato?: boolean;
  onClick?: () => void;
};

export const PromoCardBase: FC<PromoCardProps> = ({
  onClick,
  sitesCount,
  price,
  tomato,
}) => {
  const {
    cnRoot,
    cnTopWrap,
    cnPrice,
    cnTitle,
    cnSlogan,
    cnBottomWrap,
    cnList,
    cnListDecor,
  } = useClasses(tomato);
  return (
    <div className={cnRoot}>
      <div className={cnTopWrap}>
        <span className={cnPrice}>
          <b>${price}</b>
        </span>
        <h3 className={cnTitle}> {sitesCount === 1 ? "Single site license" : `${sitesCount} Site license`}</h3>
        <p className={cnSlogan}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </p>
      </div>
      <div className={cnBottomWrap}>
        <ul className={cnList}>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span> {sitesCount === 1 ? "Single site license" : `All features for ${sitesCount} sites`}</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span>Special introductory pricing</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span>Unlimited Pages and Keywords</span>
          </li>
          <li>
            <span className={cnListDecor}>
              <CheckIcon />
            </span>
            <span>Billed annually</span>
          </li>
        </ul>
        <ButtonSecondary onClick={onClick}>Get Gscore</ButtonSecondary>
      </div>
    </div>
  );
};
